class Like < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  def self.find_like_by_user(user, post)
    Like.select(:id).where(user_id: user, post_id: post)
  end
end
