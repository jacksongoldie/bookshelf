class RemoveColumnsFromUserBooks < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_books, :spice, :integer
    remove_column :user_books, :violence, :integer
    remove_column :user_books, :language, :integer
  end
end
