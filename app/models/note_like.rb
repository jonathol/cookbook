class NoteLike < ActiveRecord::Base
  validates :user, :note, presence: true
  validates :note, uniqueness: { scope: :user }

  belongs_to :user
  belongs_to :note
end
