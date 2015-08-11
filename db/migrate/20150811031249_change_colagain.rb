class ChangeColagain < ActiveRecord::Migration
  def change
    rename_column :blogs, :owner_id, :user_id
  end
end
