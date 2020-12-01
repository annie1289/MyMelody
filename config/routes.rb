Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :users, only: [:create, :index, :show] do
    resources :artists do
      resources :songs
    end
  end
  resources :artists, only: [:create, :show, :update, :destroy]
  resources :songs, only: [:create, :show, :update, :destroy]

end
