class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.integer :post_id, null: false
      t.string :note_text, null: false
      t.timestamps null: false
    end
  end
end
