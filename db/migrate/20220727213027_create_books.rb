class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :google_id
      t.boolean :mature
      t.string :img

      t.timestamps
    end
  end
end
