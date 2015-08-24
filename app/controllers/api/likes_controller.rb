class Api::LikesController < ApplicationController

  def index
    if params[:user].present?
      @likes = current_user.post_likes
    else
      @likes = Like.all
    end
    render "index"
  end

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      @note = Note.new
      @note.post_id = params[:post_id]
      @note.like_id = @like.id
      @note.note_text = current_user.username + " liked this"
      @note.save
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

end
