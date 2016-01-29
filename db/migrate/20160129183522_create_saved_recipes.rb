class CreateSavedRecipes < ActiveRecord::Migration
  def change
    create_table :recipe_saves do |t|
      t.integer :recipe_box_id, null: false
      t.integer :recipe_id, null: false

      t.timestamps null: false
    end

    add_index :recipe_saves, [:recipe_box_id, :recipe_id], unique: true
  end
end
