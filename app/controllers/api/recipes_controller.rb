class Api::RecipesController < ApplicationController
  def show
    @recipe = Recipe
      .includes(:author, :photo, :tags, :ingredients, :steps)
      .where("recipes.id = (?)", params[:id])
      .first
  end

  def index
    if (params[:user_id])
      user = User.find(params[:user_id])
      @recipes = user ? user.recipes.includes(:author, :photo) : []
    else
      @owner = {
        type: "all",
        name: "index"
      }
      @recipes = Recipe
        .includes(:author, :photo);
    end
  end
end
