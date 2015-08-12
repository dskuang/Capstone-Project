Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users
  resource :session

  namespace :api, defaults:{format: :json} do
    resources :blogs, only: [:index, :create, :show, :destroy]
    resources :posts
    resource :newsfeed
    resources :follows, only:[:create, :new, :destroy]
  end
end
