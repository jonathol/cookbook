require 'session_token'

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      get_meta_data_for_current_user
      render :show
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    log_out!
    render json: {}
  end

  def show
    current_user
    get_meta_data_for_current_user
  end
end
