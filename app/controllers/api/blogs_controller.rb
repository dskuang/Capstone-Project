class Api::BlogsController < ApplicationController
  def index
    if params[:query].present?
      @blogs = Blog.where("lower(title) ~ ?", params[:query].downcase)
    elsif params[:trending].present?
      @blogs = Blog.includes(:user).joins(:notes).
               group(:id).order(count: :desc).limit(5)
    else
      @blogs = Blog.all
    end
    render "index"
  end

  def show
    @blog = Blog.includes({ posts: [:tags, :likes, :notes] }).find(params[:id])
    render "show"
  end

  def create
    @blog = Blog.new(blog_params)
    @blog.user_id = current_user.id
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



end
