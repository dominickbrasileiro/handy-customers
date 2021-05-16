Rails.application.routes.draw do
  get "/customers", to: "customers#index"
  post "/customers", to: "customers#create"
  patch "/customers/:customer_id", to: "customers#update"

  get "/products", to: "products#index"
  post "/products", to: "products#create"
  patch "/products/:product_id", to: "products#update"

  get "/orders", to: "orders#index"
  get "/orders/:order_id", to: "orders#show"
  post "/customers/:customer_id/orders", to: "orders#create"
end
