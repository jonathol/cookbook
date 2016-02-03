class Api::RatingsController < ApplicationController
  def create
    @rating = current_user.ratings.find_or_initialize_by(recipe_id: params[:rating][:recipe_id])
    @rating.score = params[:rating][:score]
    @rating.save!

    render json: { @rating.recipe_id => @rating.score}
  end
end
