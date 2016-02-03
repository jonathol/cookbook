class Note < ActiveRecord::Base
  before_create :ensure_parent_has_no_parent
  before_create :ensure_parent_belongs_to_same_recipe
  before_create :ensure_parent_isnt_private_comment

  validates :author, :recipe, :body, presence: true
  # validates :body, length: { minimum: 10 }

  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :recipe
  has_many :child_notes, class_name: "Note", foreign_key: :parent_id
  belongs_to :parent_note, class_name: "Note", foreign_key: :parent_id
  has_many :likes, class_name: "NoteLike"

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

  def like_count
    NoteLike.where(note_id: self.id).count
  end

  private
    def ensure_parent_has_no_parent
      if self.parent_note && self.parent_note.parent_note
        raise "Note cannot be nested that deeply"
      end
    end

    def ensure_parent_belongs_to_same_recipe
      if self.parent_note && self.parent_note.recipe != self.recipe
        raise "Note must belong to same recipe as parent"
      end
    end

    def ensure_parent_isnt_private_comment
      if self.parent_note && self.parent_note.private
        raise "Cannot reply to private note"
      end
    end
end
