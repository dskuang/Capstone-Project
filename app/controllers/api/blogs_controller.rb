class Api::BlogsController < ApplicationController
  before_action :require_login
  def index
    if params[:query].present?
      @blogs = Blog.where("title ~ ?", params[:query])
    else
      @blogs = Blog.all
    end
    render "index"
  end

  def show
    @blog = Blog.find(params[:id])
    @posts = @blog.posts
    render "show"
  end

  def create
    @blog = Blog.new(blog_params)
    @blod.user_id = current_user.id
    if @blog.save
      render :json => @blog
    else
      render :json => @blog.errors.full_messages, :status => 422
    end
  end

  def update
   @blog = Blog.find(params[:id])
   if @blog.update_attributes(blog_params)
     render :json => @blog
   else
     render :json => @blog.errors.full_messages, :status => 422
   end
 end

 def destroy
   @blog = Blog.find(params[:id])
   @blog.destroy if @blog
   render :json => {}
 end

 def blog_params
   params.require(:blog).permit(:title)
 end


 private

  def require_login
    unless logged_in?
      render json: ["Unauthorized"], status: 400
    end
  end


end
