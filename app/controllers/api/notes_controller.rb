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
      params.require(:note).permit(:recipe_id, :parent_id, :body)
    end

    def get_all_notes(recipe_id)
      if current_user
        @notes = Recipe.find(recipe_id)
          .notes
          .where("private = FALSE OR author_id = (?)", current_user.id)
          .order(created_at: :desc)
      else
        @notes = Recipe.find(recipe_id)
          .notes
          .where("private = FALSE")
          .order(created_at: :desc)
      end
    end
end
