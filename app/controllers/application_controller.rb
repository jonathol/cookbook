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
  end

  def get_meta_data_for_current_user
    @user_info = {}
    @recipe_saves = {}
    @recipe_cooks = {}
    @ratings = {}
    @note_likes = {}
    return unless logged_in?

    @user_info[:id] = current_user.id
    @user_info[:email] = current_user.email
    @user_info[:name] = current_user.name
    @user_info[:photo_url] = current_user.photo.url

    current_user.recipe_saves.each do |recipe_save|
      @recipe_saves[recipe_save.recipe_id] = recipe_save.id
    end

    current_user.recipe_cooks.each do |recipe_cook|
      @recipe_cooks[recipe_cook.recipe_id] = recipe_cook.id
    end

    current_user.ratings.each do |rating|
      @ratings[rating.recipe_id] = rating.score
    end

    current_user.note_likes.each do |like|
      @note_likes[like.note_id] = like.id
    end
  end
end
