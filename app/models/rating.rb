class Rating < ActiveRecord::Base
  validates :user, :recipe, :score, presence: true
  validates :score, inclusion: { in: 1..5 }
  validates :recipe_id, uniqueness: { scope: :user_id }

  belongs_to :user
  belongs_to :recipe

  def self.avg_score_and_count(recipe_id)
    ratings = Rating.where(recipe_id: recipe_id)
    { average: ratings.average(:score).to_f.round, count: ratings.count }
  end
end
