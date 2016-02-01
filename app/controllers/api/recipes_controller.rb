class Api::RecipesController < ApplicationController
  def show
    @recipe = Recipe.find(params[:id])
  end

  def index
    if (params[:user_id])
      user = User.find(params[:user_id])
      @recipes = user ? user.recipes : []
    else
      @owner = {
        type: "all",
        name: "index"
      }
      @recipes = Recipe.all;
    end
  end
end
