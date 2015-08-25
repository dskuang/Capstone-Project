class Adduserscols < ActiveRecord::Migration
  def change
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
  end
end
