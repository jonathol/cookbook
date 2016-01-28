class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    debugger
    if @user.save
      log_in!(@user)
      render "api/sessions/token"
    else
      render json: { error: "An error has occurred" }
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update

  end

private
  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
