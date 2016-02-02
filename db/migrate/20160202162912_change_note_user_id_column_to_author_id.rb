class ChangeNoteUserIdColumnToAuthorId < ActiveRecord::Migration
  def change
    remove_column :notes, :user_id
    add_column :notes, :author_id, :integer
  end
end
