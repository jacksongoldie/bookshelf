class CreateUserData < ActiveRecord::Migration[7.0]
  def change
    create_table :user_data do |t|
      t.references :categories, foreign_key: true
      t.references :tags, foreign_key: true
      t.references :ages, foreign_key: true
      t.references :reviews, oreign_key: true

      t.timestamps
    end
  end
end
