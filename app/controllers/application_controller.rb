class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in!(user)
    @current_user = user
    @token = user.reset_session_token!
    session[:session_token] = @token
  end

  def log_out!
    current_user.try(:reset_session_token!)
    @current_user = nil
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def get_all_notes(recipe_id)
    if current_user
      @notes = Note
        .includes(:child_notes, :likes, :author)
        .where(recipe_id: recipe_id)
        .where("notes.private = FALSE OR notes.author_id = (?)", current_user.id)
        .order(created_at: :desc)
    else
      @notes = Note
        .includes(:child_notes, :likes, :author)
        .where(recipe_id: recipe_id)
        .where("private = FALSE")
        .order(created_at: :desc)
    end
    debugger
  end
end
