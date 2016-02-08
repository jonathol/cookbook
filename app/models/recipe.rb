class Recipe < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:title]
  pg_search_scope :search_title,
                  :against => :title

  validates :title, :author, presence: true

  belongs_to :author, class_name: "User"
  has_many :ingredients
  has_many :steps, class_name: "PreparationStep"
  has_many :recipe_saves, class_name: "RecipeSave", dependent: :destroy
  has_many :recipe_cooks, class_name: "Cook", dependent: :destroy
  has_many :recipe_boxes, through: :recipe_saves
  has_many :ratings, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :notes, dependent: :destroy
  has_one :photo, class_name: "RecipePhoto", dependent: :destroy


  def avg_rating_score_and_count
    self.ratings.pluck('AVG (score), COUNT(*)')[0]
  end
end
