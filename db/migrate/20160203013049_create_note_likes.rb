class CreateNoteLikes < ActiveRecord::Migration
  def change
    create_table :note_likes do |t|
      t.integer :note_id, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps null: false
    end
    add_index :note_likes, [:note_id, :user_id], unique: true
  end
end
