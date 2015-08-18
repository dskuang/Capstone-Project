class Api::UsersController < ApplicationController

  def index
    @user = User.all
    render "index"
  end

  def show
    @user = User.find(params[:id])
    render "show"
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
