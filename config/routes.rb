Rails.application.routes.draw do
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
