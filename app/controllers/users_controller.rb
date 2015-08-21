class UsersController < ApplicationController
  def new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @blog = Blog.new(blog_params)
      @blog.user_id = @user.id
      @blog.save
      login(@user)
      redirect_to ("/#feed/")
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_url
    end
  end

  def blog_params
    params.require(:blog).permit(:title)
  end


end
