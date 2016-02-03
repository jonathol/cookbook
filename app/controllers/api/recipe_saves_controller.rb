class Api::RecipeSavesController < ApplicationController
  def create
    recipe_save_params = {
      recipe_id: params[:recipe_id],
      recipe_box: current_user.recipe_box
    }
    @recipe_save = RecipeSave.create!(recipe_save_params)
    render json: { @recipe_save.recipe_id => @recipe_save.id }
  end

  def destroy
    @recipe_save = RecipeSave.find(params[:id])
    if @recipe_save.recipe_box == current_user.recipe_box
      render json: @recipe_save.destroy!.recipe_id
    else
      render json: ["you cannot unsave that recipe"]
    end
  end

  def index
    if current_user && params[:recipe_id]
      @recipe_save = RecipeSave.find_by_recipe_box_id_and_recipe_id(
        current_user.recipe_box.id, params[:recipe_id]
      )
      if @recipe_save
        render json: { @recipe_save.recipe_id => @recipe_save.id }
      else
        render json: {}
      end
    else
      @recipe_saves = current_user ? current_user.recipe_saves : {}
    end
  end
end
