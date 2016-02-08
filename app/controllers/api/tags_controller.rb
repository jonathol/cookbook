class Api::TagsController < ApplicationController
  def show
    @tag = Tag.find(params[:id])
    @recipes = @tag.recipes.includes(:author, :photo)
    if @recipes
      render :show
    else
      render json: ["Could not find recipe box"]
    end
  end

  def index
    if params[:featured]
      @tags = Tag.first(2)
      render json: @tags
    elsif params[:popular]
      @tags = Tag.first(5)
      render json: @tags
    else
      @tags = Tag.all
      render json: @tags
    end
  end
end
