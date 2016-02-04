class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

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
    @user = current_user
    @user.photo = params[:user][:photo]
    if @user.save!
      get_meta_data_for_current_user
      render "api/sessions/show"
    else
      render json: { error: "Could not update user." }
    end
  end

private
  def user_params
    params.require(:user).permit(:email, :password, :name, :photo)
  end
end
