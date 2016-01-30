class CreateRecipePhotos < ActiveRecord::Migration
  def change
    create_table :recipe_photos do |t|
      t.integer :recipe_id, null: false
      t.string :large_url
      t.string :thumb_url, null: false
      t.string :credit

      t.timestamps null: false
    end

    add_index :recipe_photos, :recipe_id, unique: true
  end
end
