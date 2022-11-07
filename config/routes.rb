Rails.application.routes.draw do
  get '/current_user', to: 'current_user#index'
  #resources :members, only: [:index, :show]
  #resources :members do
  #  resources :books
  #end
  resources :reviews, only: [:index]
  resources :user_inputs, only: [:show, :create, :update, :destroy]
  resources :ages, only: [:index]
  resources :tags, only: [:index, :create]
  resources :categories, only: [:index]
  resources :books
  resources :authors, only: [:create]
  resources :users do
    resources :profiles
  end 
  resources :users do
    resources :books
  end
  resources :profiles

  devise_for :users, path: '', 
  path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  get '/member-data', to: 'members#show'

  # Defines the root path route ("/")
  # root "articles#index"

  #from devise setup... may not need bc it's an API only app
  #root to: "home#index"
end
