class AddReviewToUserInput < ActiveRecord::Migration[7.0]
  def change
    add_reference :user_inputs, :review, foreign_key: true
  end
end
