Rails.application.routes.draw do
  get "/customers", to: "customers#index"
  post "/customers", to: "customers#create"
end
