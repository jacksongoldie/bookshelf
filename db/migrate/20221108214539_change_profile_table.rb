class ChangeProfileTable < ActiveRecord::Migration[7.0]
  def change
    change_column_default :profiles, :bio, from: false, to: true
    change_column_null :profiles, :bio, false
  end
end
