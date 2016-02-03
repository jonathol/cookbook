class Api::NoteLikesController < ApplicationController
  def create
    @like = NoteLike.find_by_user_id_and_note_id(
      current_user.id,
      params[:note_id]
    )
    if @like
      @like.destroy!
    else
      @like = current_user.note_likes.create!(note_id: params[:note_id])
    end
    @notes = get_all_notes(Note.find(params[:note_id]).recipe_id)
    render 'api/notes/index'
  end
end
