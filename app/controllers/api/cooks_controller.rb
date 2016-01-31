class Api::CooksController < ApplicationController
  def create
    @cook = current_user.cooked_recipes.create!(recipe_id: params[:recipe_id])
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
    @cooks = current_user ? current_user.cooked_recipes : []
  end
end
