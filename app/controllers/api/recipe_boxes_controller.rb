class Api::RecipeBoxesController < ApplicationController
  def show
    @user = User.find(params[:user_id])
    @recipes = @user.recipe_box.saved_recipes

    if @recipes
      @owner = {
        type: "user",
        name: @user.name || @user.email
      }
      render 'api/recipes/index'
    else
      render json: ["Could not find recipe box"]
    end
  end
end
