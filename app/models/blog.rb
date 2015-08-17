class Blog < ActiveRecord::Base
  has_many :posts
  belongs_to :user
  has_many :notes, through: :posts, source: :notes

end
