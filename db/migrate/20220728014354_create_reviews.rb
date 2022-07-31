class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :rate
      t.text :text

      t.timestamps
    end
  end
end
