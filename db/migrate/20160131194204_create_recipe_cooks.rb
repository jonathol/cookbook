class CreateRecipeCooks < ActiveRecord::Migration
  def change
    create_table :recipe_cooks do |t|
      t.integer :user_id, null: false
      t.integer :recipe_id, null: false
      
      t.timestamps null: false
    end
  add_index :recipe_cooks, [:user_id, :recipe_id], unique: true

  end
end
