class Api::FollowsController < ApplicationController

  def index
    if params[:user].present?
      @followers = current_user.followers
      @followees = current_user.followees
    end
    render "index"
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render :json => @follow
    else
      render :json => @follow.errors.full_messages, :status => 422
    end
  end

  def show
    @follow = Follow.find(params[:id]);
    render :json => @follow
  end

  def destroy
   @follow = Follow.find(params[:id])
   @follow.follower_id = current_user.id
   @follow.destroy if @follow
   render :json => {}
  end

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
  private


end
