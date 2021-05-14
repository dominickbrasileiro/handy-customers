Rails.application.routes.draw do
  get "/customers", to: "customers#index"
  post "/customers", to: "customers#create"

  get "/products", to: "products#index"
  post "/products", to: "products#create"

  get "/orders", to: "orders#index"
  post "/customers/:customer_id/orders", to: "orders#create"
end
