class Addpoststuff < ActiveRecord::Migration
  def change
    change_column :posts, :body, :text
    add_column :posts, :quotetitle, :text
    add_column :posts, :quotesource, :text
    add_column :posts, :linkurl, :string
    add_column :posts, :linkbody, :text
  end
end
