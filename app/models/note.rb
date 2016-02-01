class Note < ActiveRecord::Base
  validates :user, :recipe, :body, presence: true
  validates :body, length: { minimum: 10 }

  belongs_to :user
  belongs_to :recipe
  belongs_to :parent_note, class_name: "Note", foreign_key: :parent_id
  has_many :child_notes, class_name: "Note"
end
