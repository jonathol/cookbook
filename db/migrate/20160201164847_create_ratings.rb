class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false
      t.integer :score, null: false

      t.timestamps null: false
    end

    add_index :ratings, [:recipe_id, :user_id], unique: true
  end
end
