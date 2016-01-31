Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create, :show, :update] do
      resource :recipe_box, only:[:show, :update]
      resources :recipes, only:[:index]
    end
    resources :recipe_saves, only:[:create, :destroy, :index]
    resources :recipes, only:[:index, :show]
    resource :session, only:[:create, :destroy, :show]
  end
end
