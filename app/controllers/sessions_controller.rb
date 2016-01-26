class SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if log_in!(@user)
      redirect to api_user_url(@user)
    else
      render :new
    end
  end
end
