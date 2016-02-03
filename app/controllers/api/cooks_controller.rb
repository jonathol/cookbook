class Api::CooksController < ApplicationController
  def create
    @cook = current_user.recipe_cooks.create!(recipe_id: params[:recipe_id])
    render json: { @cook.recipe_id => @cook.id }
  end

  def destroy
    @cook = Cook.find(params[:id])
    if @cook.user == current_user
      render json: @cook.destroy!.recipe_id
    else
      render json: ["you cannot unmark that recipe as cooked"]
    end
  end

  def index
    if current_user && params[:recipe_id]
      @cook = Cook.find_by_user_id_and_recipe_id(
        current_user.id, params[:recipe_id]
      )
      if @cook
        render json: { @cook.recipe_id => @cook.id }
      else
        render json: {}
      end
    else
      @cooks = current_user ? current_user.recipe_cooks : []
    end
  end
end
