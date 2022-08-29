Rails.application.routes.draw do
  resources :members, only: [:index, :show]
  resources :members do
    resources :books
  end
  resources :reviews, only: [:index]
  resources :user_inputs, only: [:show, :create, :update]
  resources :ages, only: [:index]
  resources :tags, only: [:index]
  resources :categories, only: [:index]
  resources :books
  resources :profiles
  devise_for :users,
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
