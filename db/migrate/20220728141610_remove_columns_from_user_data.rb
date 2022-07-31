class RemoveColumnsFromUserData < ActiveRecord::Migration[7.0]
  def change
    remove_column :user_data, :categories_id, :integer
    remove_column :user_data, :tags_id, :integer
    remove_column :user_data, :ages_id, :integer
    remove_column :user_data, :reviews_id, :integer
  end
end
