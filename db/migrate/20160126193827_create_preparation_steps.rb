class CreatePreparationSteps < ActiveRecord::Migration
  def change
    create_table :preparation_steps do |t|
      t.text :description, null: false
      t.integer :step_number, null: false
      t.integer :recipe_id, null: false, index: true

      t.timestamps
    end

    add_index :preparation_steps, [:recipe_id, :step_number], unique: true
  end
end
