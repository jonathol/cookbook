class Note < ActiveRecord::Base
  validates :user, :recipe, :body, presence: true
  validates :body, length: { minimum: 10 }

  belongs_to :author, class_name: "User", foreign_key: :user_id
  belongs_to :recipe
  has_many :child_notes, class_name: "Note", foreign_key: :parent_id
  belongs_to :parent_note, class_name: "Note"

  def time_ago
    time_ago = (Time.now - self.created_at).to_i
    if time_ago < 60
      "#{time_ago} seconds ago"
    elsif time_ago < 3600
      "#{(time_ago / 60)} minutes ago"
    elsif time_ago < 86400
      "#{(time_ago / 3600)} hours ago"
    elsif time_ago < 592200
      "#{time_ago / 84000} days ago"
    elsif time_ago < 2628000
      "#{time_ago / 592200} weeks ago"
    elsif time_ago < 31536000
      "#{time_ago / 2628000} months ago"
    else
      "#{time_ago / 31536000} years ago"
    end
  end
end
