class Api::TagsController < ApplicationController
  def show
    @tag = Tag.find(params[:id])
    @recipes = @tag.recipes
    if @recipes
      @owner = {
        type: "tag",
        name: @tag.name
      }
      render 'api/recipes/index'
    else
      render json: ["Could not find recipe box"]
    end
  end
end
