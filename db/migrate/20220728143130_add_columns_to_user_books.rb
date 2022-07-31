class AddColumnsToUserBooks < ActiveRecord::Migration[7.0]
  def change
    add_column :user_books, :spice, :integer
    add_column :user_books, :violence, :integer
    add_column :user_books, :language, :integer
  end
end
