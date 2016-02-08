class Api::UtilsController < ApplicationController
  def search
    if params[:instant]
      @search_results = PgSearch
        .multisearch(params[:query])
        .includes(:searchable)
        .page(1)
      render :instant_search
    else
      @search_results = Recipe
        .search_title(params[:query])
        .includes(:searchable)
        .page(params[:page])
    end
  end
end
