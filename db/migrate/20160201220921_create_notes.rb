class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.text :body, null: false
      t.integer :user_id, null: false, index: true
      t.integer :recipe_id, null: false, index: true
      t.integer :parent_id, index: true, index: true
      t.boolean :private, default: false

      t.timestamps null: false
    end
  end
end
