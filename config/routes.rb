Rails.application.routes.draw do
  resources :users, only:[:new, :create, :edit, :update]
  namespace :api, defaults: { format: :json } do
    resources :users, only:[:show]
  end
end
