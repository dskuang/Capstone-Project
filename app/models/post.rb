class Post < ActiveRecord::Base
  belongs_to :blog
  belongs_to :user
  validates :title, presence: true
end
