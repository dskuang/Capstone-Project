class Api::BlogsController < ApplicationController
  def index
    @blogs = Blog.all
    render :json => @blogs
  end

  def show
    @blog = Blog.find(params[:id])
    @posts = @blog.posts
    render "show"
  end

  def create
    @blog = Blog.new(board_params)
    @blod.user_id = current_user.id
    if @blog.save
      render :json => @blog
    else
      render :json => @blog.errors.full_messages, :status => 422
    end
  end

  def search
    if params[:query].present?
      @blogs = Blog.where("title ~ ?", params[:query])
    else
      @blogs = Blog.none
    end

    render "search"

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


end
