require 'session_token'

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    debugger

    if @user
      api_log_in!(@user)
      render :token
    else
      render json: { error: "Invalid email/password combination" }
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end
end
