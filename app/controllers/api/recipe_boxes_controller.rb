class Api::RecipeBoxesController < ApplicationController
  def show
    @user = User.find(params[:user_id])
    @recipes = @user.recipe_box.saved_recipes

    if @recipes
      render :show
    else
      render json: ["Could not find recipe box"]
    end
  end
end
