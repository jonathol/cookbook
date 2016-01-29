class Api::RecipeBoxesController < ApplicationController
  def show
    @recipes = User.find(params[:user_id]).recipe_box.saved_recipes

    if @recipes
      render 'api/recipes/index'
    else
      render json: ["Could not find recipe box"]
    end
  end

  def update

  end
end
