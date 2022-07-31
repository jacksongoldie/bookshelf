class CreateUserInputs < ActiveRecord::Migration[7.0]
  def change
    create_table :user_inputs do |t|
      t.references :book, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :spice
      t.integer :violence
      t.integer :language

      t.timestamps
    end
  end
end
