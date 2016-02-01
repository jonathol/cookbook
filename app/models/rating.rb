class Rating < ActiveRecord::Base
  validates :user, :recipe, :score, presence: true
  validates :score, inclusion: { in: 1..5 }

  belongs_to :user
  belongs_to :recipe

  def self.avg_score_and_count(recipe_id)
    ratings = Rating.where(recipe_id: recipe_id)
    { average: ratings.average(:score), count: ratings.count }
  end
end
