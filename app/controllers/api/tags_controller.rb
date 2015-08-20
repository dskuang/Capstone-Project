class Api::TagsController < ApplicationController
  def index
    if params[:trending].present?
      @tags = Tag.joins(:taggings).select(:label).group(:label).order(:count).reverse_order.limit(8)
    else
      @tags = Tag.all
    end
    render "index"
  end

  def show
    @tag = Tag.find(params[:id])
    render "show"
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :json => @tag
    else
      render :json => @tag.errors.full_messages, :status => 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy if @tag
    render :json => {}
  end

  def tag_params
    params.require(:tag).permit(:label)
  end

  private

   def require_login
     unless logged_in?
      redirect_to new_session_url
     end
   end
end
