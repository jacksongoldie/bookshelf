class CreateUserInputTags < ActiveRecord::Migration[7.0]
  def change
    create_table :user_input_tags do |t|
      t.references :tag, foreign_key: true
      t.references :user_input, null: false, foreign_key: true

      t.timestamps
    end
  end
end
