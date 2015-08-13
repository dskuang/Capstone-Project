class Changetaggingtable < ActiveRecord::Migration
  def change
    remove_column :taggings, :user_id
    add_column :taggings, :tag_id, :integer, null: false
  end
end
