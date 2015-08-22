class Api::BlogsController < ApplicationController
  def index
    if params[:query].present?
      @blogs = Blog.where("title ~ ?", params[:query])
    elsif params[:trending].present?
      @blogs = Blog.includes(:user).joins(:notes).group(:id).order(count: :desc).limit(5)
      # @blogs = Blog.includes({ posts: [:tags, :likes] }, :notes).group(:id).order(:count).limit(5)
      #
      # sql = <<-SQL
      #   select
      #     blogs.*,
      #     posts.*,
      #     likes.*,
      #     tags.*
      #   from
      #     blogs inner join posts on blogs.post_id = posts.id
      #     inner join notes on posts.note_id = notes.id
      #   group by blogs.id
      #   order by count(blogs.id) desc
      #   limit 5
      # SQL

      # @blogs = Blog.find_by_sql([ sql ])

    else
      @blogs = Blog.all
    end
    render "index"
  end

  def show
    @blog = Blog.includes({ posts: [:tags, :likes, :notes] }).find(params[:id])
    @posts = @blog.posts
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


 private

  def require_login
    unless logged_in?
      render json: ["Unauthorized"], status: 400
    end
  end


end
