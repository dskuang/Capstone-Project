Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users
  resource :session

  namespace :api, defaults:{format: :json} do
    resources :blogs, only: [:index, :create, :show, :destroy]
    resources :posts
    resource :newsfeed
    resources :likes
    resources :follows, only:[:create, :new, :destroy, :show]
    resources :tags
    resources :taggings
  end
end
