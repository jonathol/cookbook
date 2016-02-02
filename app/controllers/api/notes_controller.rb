class Api::NotesController < ApplicationController
  def create
    @note = Note.create!(note_params)
    if @note
      return self.index
    else
      render json: ["There was an error creating your note"]
    end
  end

  def index
    if current_user
      @notes = Recipe.find(params[:recipe_id])
        .notes
        .where("private = FALSE OR author_id = (?)", current_user.id)
    else
      @notes = Recipe.find(params[:recipe_id])
        .notes
        .where("private = FALSE")
    end
  end

  private
    def note_params
      params.require(:note).permit(:recipe_id, :parent_id)
    end
end
