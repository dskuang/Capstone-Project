class Image < ActiveRecord::Migration
  def change
    add_column :posts, :imageUrl, :string
    add_column :posts, :imagebody, :string
    add_column :posts, :songUrl, :string
    add_column :posts, :songbody, :string
  end
end
