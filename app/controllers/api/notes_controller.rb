class Api::NotesController < ApplicationController
  def create
    @note = current_user.notes.create!(note_params)
    if @note
      get_all_notes(@note.recipe_id)
      render :index
    else
      render json: ["There was an error creating your note"]
    end
  end

  def index
    get_all_notes(params[:recipe_id])
  end

  private
    def note_params
      params.require(:note).permit(:recipe_id, :private, :parent_id, :body)
    end
end
