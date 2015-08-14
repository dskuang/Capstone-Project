class Api::NewsfeedsController < ApplicationController
  before_action :require_login
  def show
    # @posts = []
    # if current_user.followees
    #   current_user.followees.each do |followee|
    #     @posts += followee.posts
    #   end
    # end
    # @posts += current_user.posts
    @posts = Post.includes(:tags, :likes, :user).where(user_id: current_user.followee_ids + [current_user.id]).order(created_at: :desc)

    render "show"
  end


  def destroy
    @post = Post.find(params[:id])
    @post.destroy if @post
    render :json => {}
  end

  private

   def require_login
     unless logged_in?
        render json: ["Unauthorized"], status: 400
     end
   end
end
