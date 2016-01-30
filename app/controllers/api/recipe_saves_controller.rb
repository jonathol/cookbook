class RecipeSavesController < ApplicationController
  def create
    recipe_save_params = {
      recipe_id: params[:recipe_id],
      user_id: current_user.id
    }
    @recipe_save = RecipeSave.create!(recipe_save_params)
    render json: @recipe_save
  end

  def destroy
    
  end

  def index
    @recipe_saves = current_user ? current_user.recipe_saves : []
    render json: @recipe_saves
  end
end
