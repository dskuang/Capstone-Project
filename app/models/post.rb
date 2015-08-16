class Post < ActiveRecord::Base
  belongs_to :blog
  belongs_to :user
  has_many :likes
  has_many :taggings
  has_many :notes
  has_many :tags, through: :taggings, source: :tag

end
