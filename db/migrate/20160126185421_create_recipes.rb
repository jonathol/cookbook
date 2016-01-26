class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.text :description
      t.text :ingredients
      t.text :preparation, null: false
      t.integer :author_id, null: false, index: true

      t.timestamps
    end
  end
end
