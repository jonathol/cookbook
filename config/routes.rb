Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create, :show, :update] do
      resource :recipe_box, only:[:show]
      resources :recipes, only:[:index]
    end
    resources :recipe_saves, only:[:create, :destroy, :index]
    resources :cooks, only:[:create, :destroy, :index]
    resources :ratings, only:[:create, :index]
    resources :recipes, only:[:index, :show] do
      resources :notes, only:[:index, :create]
    end
    resources :tags, only: :show
    resource :session, only:[:create, :destroy, :show]
  end
end
