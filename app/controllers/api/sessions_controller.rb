class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user
      @session_token = api_log_in!(user)
      render :token
    else
      render :new
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end
end
