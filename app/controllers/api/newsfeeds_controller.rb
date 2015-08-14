class Api::NewsfeedsController < ApplicationController
  def show
    @posts = []
    current_user.followees.each do |followee|
      @posts += followee.posts
    end
    @posts += current_user.posts
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
