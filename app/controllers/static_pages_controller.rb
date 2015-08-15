class StaticPagesController < ApplicationController
    before_action :require_login
  def root
  end


   private

    def require_login
      unless logged_in?
        render json: ["Unauthorized"], status: 400
      end
    end
end
