class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :name, null: false
      t.float :quantity
      t.integer :recipe_id, null: false, index: true

      t.timestamps
    end
  end
end
