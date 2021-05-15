class OrdersController < ApplicationController
  def index
    @orders = Order.all
    render json: @orders.to_json(:include => :customer)
  end

  def show
    @orders = Order.find(params[:order_id])
    render json: @orders.to_json(:include => [:customer, :order_items])
  end

  def create
    @customer = Customer.find(params[:customer_id])
    
    @total = 0

    @order = @customer.orders.new()

    create_order_items.each do |item|
      @product = Product.find(item['product_id'])
      @total = @total + (@product.price * item['quantity'])
      
      @order.order_items.new(
        product_id: @product.id,
        name: @product.name,
        price: @product.price,
        quantity: item['quantity'],
      )
    end

    @order.amount = @total

    if not @order.valid?
      render json: { error: true, message: 'Bad Request' }, status: 400
      return
    end

    if @order.save
      render json: @order, status: 201
    else
      render json: { error: true, message:'Internal Server Error' }, status: 500
    end
  end

  private
  
  def create_order_items
    params.require(:items)
  end
end
