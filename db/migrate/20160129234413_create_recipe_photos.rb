class CreateRecipePhotos < ActiveRecord::Migration
  def change
    create_table :recipe_photos do |t|
      t.string :large_url
      t.string :small_url, null: false
      t.string :credit

      t.timestamps null: false
    end
  end
end
