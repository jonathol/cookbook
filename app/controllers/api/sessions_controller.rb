require 'session_token'

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render :token
    else
      render json: { error: "Invalid email/password combination" }, status: 400
    end
  end

  def destroy
    user = current_user
    if current_user
      log_out!
      render json: [user.email]
    else
      render json: ["Could not find user with session token"], status: 400
    end
  end
end
