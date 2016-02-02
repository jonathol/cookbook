class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      redirect_to api_user_url(@user)
    else
      render :new
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end
end
