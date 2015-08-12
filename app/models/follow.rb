class Follow < ActiveRecord::Base
  belongs_to :followee, class_name: "User"
  belongs_to :follower, class_name: "User"

  validates :followee, :follower, presence: true
  validates :follower, uniqueness: { scope: :followee }

  def self.find_follow_by_user(user1, user2)
    Follow.where(follower_id: user1, followee_id: user2)
  end

end
