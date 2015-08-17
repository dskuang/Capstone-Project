class Addlikeidtonotes < ActiveRecord::Migration
  def change
    add_column :notes, :like_id, :integer
  end
end
