Rails.application.routes.draw do
  root "static_pages#root"

  resources :users, only:[:new, :create]
  resource :session, only:[:new, :create, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create, :show, :update]
    resources :recipes, only:[:index, :show]
    resource :session, only:[:create, :destroy]
  end
end
