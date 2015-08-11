class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render "index"
  end

  def show
    @post = Post.find(params[:id])
    render "show"
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :json => @post
    else
      render :json => @post.errors.full_messages, :status => 422
    end
  end


  def update
   @post = Post.find(params[:id])
   if @post.update_attributes(post_params)
     render :json => @post
   else
     render :json => @post.errors.full_messages, :status => 422
   end
 end

 def destroy
   @post = Post.find(params[:id])
   @post.destroy if @post
   render :json => {}
 end

 def post_params
   params.require(:post).permit(:title, :blog_id, :body)
 end
end
