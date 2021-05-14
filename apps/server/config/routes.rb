Rails.application.routes.draw do
  post "/customers", to: "customers#create"
end
