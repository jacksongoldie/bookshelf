Rails.application.routes.draw do
  get '/me', to: 'application#me'

  # Defines the root path route ("/")
  # root "articles#index"
end
