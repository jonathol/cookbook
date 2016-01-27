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

mayo = Recipe.create!(
  title: "Dijon Mayonnaise",
  description: "Mayonnaise takes almost no time to make and tastes much better than anything from the store.",
  author: maureen,
  cook_time: "5 minutes",
  servings: "1 cup"
)

Ingredient.create!(
name: "teaspoons Dijon",
quantity: "1 1/2",
recipe: mayo
)

Ingredient.create!(
name: "tablespoon lemon juice",
quantity: "1",
recipe: mayo
)

Ingredient.create!(
  name: "egg yolk",
  quantity: "1",
  recipe: mayo
)

Ingredient.create!(
  name: "teaspoon salt",
  quantity: "1/4",
  recipe: mayo
)

Ingredient.create!(
  name: "cup canola oil",
  quantity: "1",
  recipe: mayo
)

PreparationStep.create!(
  description: "Mix together all the ingredients except for the oil in a large bowl.",
  step_number: 1,
  recipe: mayo
)

PreparationStep.create!(
  description: "While whisking the other ingredients, slowly pour the oil into the bowl.",
  step_number: 2,
  recipe: mayo
)

hot_sauce = Recipe.create!(
  title: "Spicy Salsa",
  author_id: will.id,
  cook_time: "5 minutes",
  servings: "3 cups"
)

Ingredient.create!(
name: "ounce can of jalepenos",
quantity: "8",
recipe: hot_sauce
)

Ingredient.create!(
name: "ounce can of tomatoes",
quantity: "16",
recipe: hot_sauce
)

Ingredient.create!(
  name: "ounce can of tomato paste",
  quantity: "8",
  recipe: hot_sauce
)

Ingredient.create!(
  name: "teaspoon salt",
  quantity: "1/2",
  recipe: hot_sauce
)

Ingredient.create!(
  name: "tablespoon cumin",
  quantity: "1",
  recipe: hot_sauce
)

Ingredient.create!(
  name: "teaspoons Tobasco",
  quantity: "2",
  recipe: hot_sauce
)

PreparationStep.create!(
  description: "Put ingredients in blender and blend until well mixed.",
  step_number: 1,
  recipe: hot_sauce
)

smoothie = Recipe.create!(
  title: "Strawberry-Banana Smoothie",
  author_id: maureen.id,
  cook_time: "5 minutes",
  servings: "3 cups"
)

Ingredient.create!(
name: "cups frozen strawberries",
quantity: "2",
recipe: smoothie
)

Ingredient.create!(
name: "frozen banana",
quantity: "1",
recipe: smoothie
)

Ingredient.create!(
  name: "cup yogurt",
  quantity: "1",
  recipe: smoothie
)

PreparationStep.create!(
  description: "Put ingredients in blender and blend until well mixed. Add more yogurt or water to reach desired consistency.",
  step_number: 1,
  recipe: smoothie
)

sesame_noodles = Recipe.create!(
  title: "Sesame Noodles",
  author_id: maureen.id,
  cook_time: "20 minutes",
  servings: "4 servings"
)

hummus = Recipe.create!(
  title: "Hummus",
  author: will,
  cook_time: "1 1/2 hours",
  servings: "4 cups"
)

popcorn = Recipe.create!(
  title: "Caramel Popcorn",
  author: sophie,
  cook_time: "30 minutes",
)

burrito = Recipe.create!(
  title: "Catfish Burrito",
  author: david,
  cook_time: "45 minutes"
)

cauliflower_parm = Recipe.create!(
  title: "Cauliflower Parmesan",
  author: maureen,
  cook_time: "1 1/2 hours"
)

marinara = Recipe.create!(
  title: "San Marzano Marinara",
  author: will,
  cook_time: "30 minutes"
)

chicken_curry = Recipe.create!(
  title: "Chicken Curry",
  author: david,
  cook_time: "1 hour"
)

pancakes = Recipe.create!(
  title: "Pecan Pancakes",
  author: will,
  cook_time: "25 minutes"
)
