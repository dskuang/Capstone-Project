class Addvideo < ActiveRecord::Migration
  def change
    add_column :posts, :videoUrl, :string
    add_column :posts, :videobody, :string
  end
end
