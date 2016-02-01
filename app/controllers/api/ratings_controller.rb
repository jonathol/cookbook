class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.find_by(
      recipe_id: rating_params[:recipe_id],
      user_id: current_user.id
    )
    if @rating
      @rating.score = rating_params[:score]
      @rating.save!
    else
      @rating = current_user.ratings.create!(rating_params)
    end

    @score_info = Rating.avg_score_and_count(rating_params[:recipe_id])
    render json: @score_info
  end

  def index
    if params[:recipe_id]
      @score_info = Rating.avg_score_and_count(params[:recipe_id])
      render json: @score_info
    end
  end

  private
    def rating_params
      params.require(:rating).permit(:recipe_id, :score)
    end
end
