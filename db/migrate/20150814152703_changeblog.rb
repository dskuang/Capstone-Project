class Changeblog < ActiveRecord::Migration
  def change
    change_column :blogs, :title, :string, null: true
  end
end
