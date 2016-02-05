class Api::UtilsController < ApplicationController
  def search
    if params[:instant]
      @search_results = PgSearch
        .multisearch(params[:query])
        .includes(:searchable)
    else
      @search_results = PgSearch
        .multisearch(params[:query])
        .includes(:searchable)
        .page(params[:page])
  end
end
