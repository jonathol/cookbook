class AddOriginalHeightToRecipePhotos < ActiveRecord::Migration
  def change
    add_column :recipe_photos, :original_height, :integer
    add_column :recipe_photos, :original_width, :integer
  end
end
