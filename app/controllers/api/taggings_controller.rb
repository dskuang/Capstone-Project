class Api::TaggingsController < ApplicationController
  def index
    @taggings = Tagging.all
    render "index"
  end

  def show
    @tagging = Tagging.find(params[:id])
    render "show"
  end

  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render :json => @tagging
    else
      render :json => @tagging.errors.full_messages, :status => 422
    end
  end

  def destroy
    @tagging = Tagging.find(params[:id])
    @tagging.destroy if @tagging
    render :json => {}
  end

  def tagging_params
    params.require(:tagging).permit(:tag_id, :post_id)
  end

end
