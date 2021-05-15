class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end

  def create
    @product = Product.new(create_product_params)

    if not @product.valid?
      render json: { error: true, message: 'Bad Request' }, status: 400
      return
    end

    if @product.save
      render json: @product, status: 201
    else
      render json: { error: true, message:'Internal Server Error' }, status: 500
    end
  end

  private

  def create_product_params
    params.require(:product).permit(:name, :price)
  end
end
