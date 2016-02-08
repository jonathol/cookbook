class Api::UtilsController < ApplicationController
  def search
    if params[:instant]
      @search_results = PgSearch
        .multisearch(params[:query])
        .includes(:searchable)
        .page(1)
      render :instant_search
    else
      @query = params[:query]
      @search_results = Recipe
        .search_title(@query)
        .page(params[:page])
      render :full_page_search
    end
  end
end
