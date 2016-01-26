# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

will = User.create!(
  email: "wrmcmeans@gmail.com",
  password: "starwars",
  name: "William McMeans"
)

maureen = User.create!(
  email: "maureen@gmail.com",
  password: "starwars",
  name: "Maureen Griswold",
)

david = User.create!(
  email: "davidjones@gmail.com",
  password: "starwars",
  name: "David Jones"
)

sophie = User.create!(
  email: "sophied@gmail.com",
  password: "starwars",
  name: "Sophie DiIorio"
)

user1 = User.create!(
  email: "adam33@gmail.com",
  password: "movies"
)

user2 = User.create!(
  email: "kylew90@comcast.net",
  password: "ilovefood",
  name: "Kyle"
)

user3 = User.create!(
  email: "funnychef12@hotmail.com",
  password: "cooking"
)

user4 = User.create!(
  email: "melissa.c.lee@gmail.com",
  password: "muffins",
  name: "Melissa"
)

user5 = User.create!(
  email: "tsmith2010@live.com",
  password: "@@secret@@"
)

user6 = User.create!(
  email: "thehammer50@aol.com",
  password: "aol?!?!",
  name: "Matt"
)

user7 = User.create!(
  email: "annerobbins@gmail.com",
  password: "fooood"
)

user8 = User.create!(
  email: "aec1977@gmail.com",
  password: "p455w0rd"
)

user9 = User.create!(
  email: "giantsfan88@gmail.com",
  password: "vanilla",
  name: "Paul Ramirez"
)

user10 = User.create!(
  email: "lspeterson@gmail.com",
  password: "cupcakes"
)

Ingredient.destroy_all
PreparationStep.destroy_all
Recipe.destroy_all

muffins = Recipe.create!(
  title: "Banana Nut Muffins",
  description: "These banana nut muffins make for a healthy breakfast or snack, and are easy to make. Adding cinnamon and other spices gives it a more complex flavor, and adding more banana in place of sugar makes them healthier while keeping them delicious.",
  author_id: will.id,
  cook_time: "40 minutes",
  servings: "12 muffins"
)

Ingredient.create!(
  name: "cups whole wheat flour",
  quantity: "2 1/2",
  recipe: muffins
)

Ingredient.create!(
  name: "cup sugar",
  quantity: "1/2",
  recipe: muffins
)

Ingredient.create!(
  name: "cups pureed banana",
  quantity: "2",
  recipe: muffins
)

Ingredient.create!(
  name: "teaspoons baking powder",
  quantity: "2",
  recipe: muffins
)

Ingredient.create!(
  name: "cup melted butter",
  quantity: "1/2",
  recipe: muffins
)

Ingredient.create!(
  name: "cup buttermilk",
  quantity: "1/2",
  recipe: muffins
)

Ingredient.create!(
  name: "eggs",
  quantity: "2",
  recipe: muffins
)

Ingredient.create!(
  name: "cup pecans",
  quantity: "1/2",
  recipe: muffins
)

Ingredient.create!(
  name: "teaspoon cinnamon",
  quantity: "1",
  recipe: muffins
)

Ingredient.create!(
  name: "teaspoon cloves",
  quantity: "1/2",
  recipe: muffins
)

PreparationStep.create!(
  description: "Preheat oven to 350 degrees and grease muffin tin. Mix together flour, sugar, baking powder, cinnamon, cloves, and pecans in a large bowl. Mix together remaining ingredients separately.",
  step_number: 1,
  recipe: muffins
)

PreparationStep.create!(
  description: "Gently fold wet ingredients into dry ingredients. Fill muffin tins with batter.",
  step_number: 2,
  recipe: muffins
)

PreparationStep.create!(
  description: "Place in oven and bake for about 25 minutes, or tops begin to look golden-brown.",
  step_number: 3,
  recipe: muffins
)
