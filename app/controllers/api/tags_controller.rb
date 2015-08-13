class Api::TagsController < ApplicationController
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
end
