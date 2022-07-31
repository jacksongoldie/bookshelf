class DropUserInputCategories < ActiveRecord::Migration[7.0]
  def change
    drop_table :user_input_categories
  end
end
