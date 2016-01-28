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
      render json: { error: "Invalid email/password combination" }
    end
  end

  def destroy
    user_email = current_user.email
    log_out!

    render json: { user_email: user_email }
  end
end
