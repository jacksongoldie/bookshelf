class DropUserBooksCategories < ActiveRecord::Migration[7.0]
  def change
    drop_table :user_books_categories
  end
end
