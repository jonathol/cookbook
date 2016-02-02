require 'session_token'

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      render json: {
        id: current_user.id,
        name: current_user.name || current_user.email
      }
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def destroy
    log_out!
    render json: {}
  end

  def show
    if current_user
      @token = current_user.session_token
      render json: {
        id: current_user.id,
        name: current_user.name || current_user.email
      }
    else
      render json: {}
    end
  end
end
