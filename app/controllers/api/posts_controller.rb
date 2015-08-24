class Api::PostsController < ApplicationController
  def index
    if params[:trending].present?
      @posts = Post.preload(:tags, :likes, :user, :taggings, :notes).joins(:notes).group(:id).order(count: :desc).limit(5).page(params[:page]).per(5)
      @bool = false
    elsif params[:tag].present?
      @tagpost = true
      @posts = Post.includes(:taggings, :tags, :user).references(:tags).where(tags: {label: params[:tag]})
    elsif params[:id].present?

      @posts = Blog.find(params[:id]).posts.page(params[:page]).per(3)
      @bool = true
    else
      @posts = Post.includes(:likes, :taggings, :tags, :notes, :user).where(og_post_id: nil).page(params[:page]).per(6)
      @bool = true
    end
    render "index"
  end

  def show
    @post = Post.find(params[:id])
    render "show"
  end

  def create
    blog_id = current_user.blog.id
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.blog_id = blog_id
    if @post.save
      render "show"
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
   render :json => @post
 end

 def post_params
   params.require(:post).permit(:title, :body, :attr, :quotetitle, :quotesource,
   :linkurl, :linkbody, :imageUrl, :imagebody, :songUrl, :songbody, :videoUrl,
   :videobody, :og_post_id)
 end

 private

  def require_login
    unless logged_in?
      render json: ["Unauthorized"], status: 400
    end
  end
end
