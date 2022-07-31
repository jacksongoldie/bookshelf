class AddUserInputToReview < ActiveRecord::Migration[7.0]
  def change
    add_reference :reviews, :user_input, null: false, foreign_key: true
  end
end
