class ProductsController < ApplicationController
  def create
    @product = Product.new(create_product_params)

    if @product.save
      render json: @product, status: 201
    else
      render error: 'Internal Server Error', status: 500
    end
  end

  private

  def create_product_params
    params.require(:product).permit(:name, :price)
  end
end
