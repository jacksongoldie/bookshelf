class DropUserBookInputsTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :user_book_inputs
  end
end
