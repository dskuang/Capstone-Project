class Api::NewsfeedsController < ApplicationController

  def show
    @posts = Post.includes(:tags, :likes, :taggings, :notes, :user)
    .where(user_id: current_user.followee_ids + [current_user.id]).order(created_at: :desc)
    # .page(params[:page]).per(10)

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
