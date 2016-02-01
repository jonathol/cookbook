class Api::RatingsController < ApplicationController
  def create
    @rating = current_user.ratings.create!(recipe_id: params[:recipe_id])
    render json: { @rating.recipe_id => @rating.id }
  end

  def index
    if params[:recipe_id]
      @score_info = Rating.avg_score_and_count(params[:recipe_id])
      render json: @score_info
    end
  end
end
