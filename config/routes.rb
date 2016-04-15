Rails.application.routes.draw do
  root "static_pages#root"
  get "/auth/:provider/callback", defaults: { format: :json }, to: "sessions#create"

  namespace :api, defaults: { format: :json } do
    get "search", to: "utils#search"
    resources :cooks, only:[:create, :destroy, :index]
    resources :notes, only: :create
    resources :note_likes, only: [:create, :destroy]
    resources :ratings, only: :create
    resources :recipes, only:[:index, :show] do
      resources :notes, only:[:index]
    end
    resources :recipe_saves, only: [:create, :index, :destroy]
    resource :session, only:[:create, :destroy, :show]
    resources :tags, only: [:index, :show]
    resources :users, only:[:create, :show, :update] do
      resource :recipe_box, only:[:show]
      resources :recipes, only:[:index]
    end
  end
end
