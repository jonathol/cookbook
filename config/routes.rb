Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create, :show, :update] do
      resource :recipe_box, only:[:show]
      resources :recipes, only:[:index]
    end
    resources :recipe_saves, only: [:create, :index, :destroy]
    resources :cooks, only:[:create, :destroy, :index]
    resources :ratings, only: :create
    resources :recipes, only:[:index, :show] do
      resources :notes, only:[:index]
    end
    resources :notes, only: :create
    resources :note_likes, only: [:create, :destroy]
    resources :tags, only: :show
    resource :session, only:[:create, :destroy, :show]
  end
end
