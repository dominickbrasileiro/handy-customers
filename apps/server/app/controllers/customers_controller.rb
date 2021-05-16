class CustomersController < ApplicationController
  def index
    customers = Customer.order(:created_at)
    render json: customers
  end

  def create
    customer = Customer.new(create_customer_params)

    if not customer.valid?
      render json: { error: true, message: 'Bad Request' }, status: 400
      return
    end

    if customer.save
      render json: customer, status: 201
    else
      render json: { error: true, message:'Internal Server Error' }, status: 500
    end
  end

  def update
    customer = Customer.find(params[:customer_id])

    update_params = customer_params

    customer.name = update_params['name'] || customer.name
    customer.birth_date = update_params['birth_date'] || customer.birth_date
    customer.phone_number = update_params['phone_number'] || customer.phone_number
    customer.active = update_params.has_key?(:active) ? update_params['active']  : customer.active

    if not customer.valid?
      render json: { error: true, message: 'Bad Request' }, status: 400
      return
    end

    if customer.save
      render json: customer, status: 200
    else
      render json: { error: true, message:'Internal Server Error' }, status: 500
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :phone_number, :birth_date, :active)
  end
end
