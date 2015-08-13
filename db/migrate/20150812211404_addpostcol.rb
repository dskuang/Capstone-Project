class Addpostcol < ActiveRecord::Migration
  def change
    add_column :posts, :attr, :string, null: false
  end
end
