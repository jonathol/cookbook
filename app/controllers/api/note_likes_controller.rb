class Api::NoteLikesController < ApplicationController
  def create
    @like = current_user.note_likes.create!(note_id: params[:note_id])
    render json: { @like.note_id => @like.id }
  end

  def destroy
    @like = NoteLike.find(params[:id])
    if @like.user == current_user
      render json: @like.destroy!.note_id
    else
      render json: ["you cannot unmark that recipe as cooked"]
    end
  end
end
