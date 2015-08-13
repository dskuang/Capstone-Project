class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :post_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
