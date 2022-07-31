class CreateUserBooksCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :user_books_categories do |t|
      t.references :user, null: false, foreign_key: true
      t.references :categories, null: false, foreign_key: true

      t.timestamps
    end
  end
end
