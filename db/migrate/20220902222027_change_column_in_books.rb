class ChangeColumnInBooks < ActiveRecord::Migration[7.0]
  def change
    change_column :books, :google_id, :string
  end
end
