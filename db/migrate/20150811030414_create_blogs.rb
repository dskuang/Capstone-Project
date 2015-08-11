class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.integer :owner_id, null: false
      t.timestamps null: false
      t.string :title, null: false
    end
    add_index :blogs, :owner_id
  end
end
