class DropTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :user_data
  end
end
