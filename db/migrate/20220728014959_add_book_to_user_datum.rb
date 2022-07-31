class AddBookToUserDatum < ActiveRecord::Migration[7.0]
  def change
    add_reference :user_data, :book, null: false, foreign_key: true
  end
end
