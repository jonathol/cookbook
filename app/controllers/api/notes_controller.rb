class Api::NotesController < ApplicationController
  def create
    # note_params = {
    #   recipe_id: params[:recipe_id],
    #   user: current_user,
    #   parent_note_id: params[:parent_note_id]
    # }
    # @recipe_save = RecipeSave.create!(recipe_save_params)
    # render json: { @recipe_save.recipe_id => @recipe_save.id }
    note_params = {
      recipe_id: params[:recipe_id]
    }
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
end
