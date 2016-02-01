class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :recipe_id, null: false

      t.timestamps null: false
    end

    add_index :taggings, [:tag_id, :recipe_id], unique: true
  end
end
