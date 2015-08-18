class Addpicturecol < ActiveRecord::Migration
  def change
    add_column :users, :profileUrl, :string
  end
end
