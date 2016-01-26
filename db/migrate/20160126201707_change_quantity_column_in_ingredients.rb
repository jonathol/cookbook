class ChangeQuantityColumnInIngredients < ActiveRecord::Migration
  def change
    change_column :ingredients, :quantity, :string
  end
end
