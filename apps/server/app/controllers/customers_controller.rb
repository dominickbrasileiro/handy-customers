class CustomersController < ApplicationController
  def index
    @customers = Customer.all
    render json: @customers
  end

  def create
    @customer = Customer.new(create_customer_params)

    if @customer.save
      render json: @customer, status: 201
    else
      render error: 'Internal Server Error', status: 500
    end
  end

  private

  def create_customer_params
    params.require(:customer).permit(:name, :phone_number, :birth_date)
  end
end
