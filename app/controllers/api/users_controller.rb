class Api::UsersController < ApplicationController
  def index
    if params[:followees].present?
      @users = current_user.followees
    elsif params[:followers].present?
      @users = current_user.followers
    else
      @users = User.all
    end
    render "index"
  end

  def show
    @user = User.find(params[:id])
    render "show"
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :json => @user
    else
      render :json => @user.errors.full_messages, :status => 422
    end

  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy if @user
    render :json => {}
  end


end
