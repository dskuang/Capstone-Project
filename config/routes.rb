Rails.application.routes.draw do
  root to: 'static_pages#root'
  resource :session
  resources :users

  namespace :api, defaults:{format: :json} do
    resources :blogs, only: [:index, :create, :show, :destroy, :update]
    resources :users
    resources :posts
    resource :newsfeed
    resources :likes
    resources :follows, only:[:index, :create, :new, :destroy, :show]
    resources :tags
    resources :taggings
    resources :notes
  end
end
