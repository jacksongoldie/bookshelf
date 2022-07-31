class RemoveReviewFromUserInput < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_inputs, :review_id, :integer
  end
end
