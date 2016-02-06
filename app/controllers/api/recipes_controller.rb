class Api::RecipesController < ApplicationController
  def show
    @recipe = Recipe
      .includes(:author, :photo, :tags, :ingredients, :steps, :ratings)
      .where("recipes.id = (?)", params[:id])
      .first
    @ratings = @recipe.avg_rating_score_and_count
  end

  def index
    if params[:featured]
      @recipes_list = Recipe.includes(:author, :photo).order(created_at: :desc)
      @recipe = Recipe.last
      render :featured
    elsif params[:user_id]
      user = User.find(params[:user_id])
      @recipes = user ? user.recipes.includes(:author, :photo) : []
    else
      @recipes = Recipe.includes(:author, :photo).order(created_at: :desc)
    end
  end
end
