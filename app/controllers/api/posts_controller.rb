class Api::PostsController < ApplicationController
  before_action :require_login
  def index
    @posts = Post.includes(:likes, :taggings).all
    render "index"
  end

  def show
    @post = Post.find(params[:id])
    render "show"
  end

  def create
    blog_id = User.find_blog_by_user(current_user.id)[0].id
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.blog_id = blog_id
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
   params.require(:post).permit(:title, :body, :attr, :quotetitle, :quotesource,
   :linkurl, :linkbody, :imageUrl, :imagebody, :songUrl, :songbody, :videoUrl,
   :videobody)
 end
 
 private

  def require_login
    unless logged_in?
      render json: ["Unauthorized"], status: 400
    end
  end
end
