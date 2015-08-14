class Api::TaggingsController < ApplicationController
  before_action :require_login

  def index
    @taggings = Tagging.all
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

  private

   def require_login
     unless logged_in?
        render json: ["Unauthorized"], status: 400
     end
   end

end
