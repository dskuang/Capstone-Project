class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render :json => @follow
    else
      render :json => @follow.errors.full_messages, :status => 422
    end
  end

  

 def destroy
   @follow = Follow.find_by(current_user.id)
   @follow.follower_id = current_user.id
   @follow.destroy if @follow
   render :json => {}
 end

 def follow_params
   params.require(:follow).permit(:followee_id)
 end
end
