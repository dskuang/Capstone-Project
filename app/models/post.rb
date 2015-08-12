class Post < ActiveRecord::Base
  belongs_to :blog
  belongs_to :user
  has_many :likes
  validates :title, presence: true
end
