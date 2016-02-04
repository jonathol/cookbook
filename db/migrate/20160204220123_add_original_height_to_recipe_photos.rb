class AddOriginalHeightToRecipePhotos < ActiveRecord::Migration
  def change
    add_column :recipe_photos, :large_original_height, :integer
  end
end
