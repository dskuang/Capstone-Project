class Api::NewsfeedsController < ApplicationController
  def show
    @posts = Post.all
    # debugger
    @posts = @posts.select{|post| post.user_id == current_user.id}

    render "show"
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
