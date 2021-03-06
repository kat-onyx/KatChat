Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server => '/cable'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :servers, only: [:create, :update, :destroy, :show, :index]
    resources :server_subscriptions, only: [:create, :destroy]
    resources :channels, only: [:create, :update, :destroy, :index, :show]
    resources :messages, only: [:create, :update, :destroy, :index, :show]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
