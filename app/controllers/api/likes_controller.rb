class Api::LikesController < ApplicationController
  before_action :require_login
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render :json => @like
    else
      render :json => @like.errors.full_messages, :status => 422
    end
  end

  def show
    @like = Like.find(params[:id]);
    render :json => @like
  end

  def destroy
   @like = Like.find(params[:id])
   @like.user_id = current_user.id
   @like.destroy if @like
   render :json => {}
  end

  def like_params
    params.require(:like).permit(:post_id)
  end

  private

   def require_login
     unless logged_in?
        render json: ["Unauthorized"], status: 400
     end
   end
end
