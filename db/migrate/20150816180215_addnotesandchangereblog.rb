class Addnotesandchangereblog < ActiveRecord::Migration
  def change
    remove_column :posts, :reblogged, :integer
    add_column :posts, :og_post_id, :integer
  
  end
end
