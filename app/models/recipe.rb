class Recipe < ActiveRecord::Base
  validates :title, :author, :preparation, presence: true

  belongs_to :author, class_name: "User"
end
