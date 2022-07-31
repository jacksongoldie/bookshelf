class AddColumnsToUserDatum < ActiveRecord::Migration[7.0]
  def change
    add_column :user_data, :spice, :integer
    add_column :user_data, :violence, :integer
    add_column :user_data, :language, :integer
  end
end
