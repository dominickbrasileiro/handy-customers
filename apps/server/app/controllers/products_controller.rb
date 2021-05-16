class ProductsController < ApplicationController
  def index
    products = Product.all
    render json: products
  end

  def create
    product = Product.new(product_params)

    if not product.valid?
      render json: { error: true, message: 'Bad Request' }, status: 400
      return
    end

    if product.save
      render json: product, status: 201
    else
      render json: { error: true, message:'Internal Server Error' }, status: 500
    end
  end

  def update
    product = Product.find(params[:product_id])

    update_params = product_params

    product.name = update_params['name'] || product.name
    product.price = update_params['price'] || product.price
    product.active = update_params.has_key?(:active) ? update_params['active']  : product.active

    if not product.valid?
      render json: { error: true, message: 'Bad Request' }, status: 400
      return
    end

    if product.save
      render json: product, status: 200
    else
      render json: { error: true, message:'Internal Server Error' }, status: 500
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :active)
  end
end
