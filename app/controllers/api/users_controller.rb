class Api::UsersController < ApplicationController

  def index
    @user = User.all
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

  # def edit
  # end

  # def update
  #   @user = User.find(params[:id])
  #   @user = User.update()
  # end

  def destroy
    @user = User.find(params[:id])
    @user.destroy if @user
    render :json => {}
  end


end
