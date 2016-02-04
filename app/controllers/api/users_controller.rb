class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      get_meta_data_for_current_user
      render :show
    else
      render json: { error: "An error has occurred" }
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    update_params = {}
    user_params.each do |param, val|
      sym = (param.to_s + "=").to_sym
      current_user.send(sym, val) if val && val != "null"
    end

    if current_user.save!
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
