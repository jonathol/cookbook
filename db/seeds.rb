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

vik_spice = User.create!(
  email: "vik_spice@gmail.com",
  password: "starwars",
  name: "Vik Rai"
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
  author: will,
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
name: "ounce can of jalapenos",
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
  author: maureen,
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
  author: maureen,
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

pecan_pie = Recipe.create!(
  title: "Chocolate Pecan Pie",
  author: maureen,
  cook_time: "2 hours",
  servings: "6-8 slices"
)

margaritas = Recipe.create!(
  title: "Frozen Margaritas",
  author: will,
  cook_time: "2 hours",
  servings: "8 drinks"
)

pad_kee_mao = Recipe.create!(
  title: "Pad Kee Mao",
  author: david,
  cook_time: "40 minutes",
  servings: "4 servings"
)

pupusas = Recipe.create!(
  title: "Bean and Cheese Pupusas",
  author: sophie,
  cook_time: "1 hour",
  servings: "About 15 pupusas"
)

gratin = Recipe.create!(
  title: "Gratin Dauphinois",
  author: will,
  cook_time: "1 hour",
  servings: "6 servings"
)

pulled_pork_sammy = Recipe.create!(
  title: "Pulled Pork Sandwich",
  author: david,
  cook_time: "7 hours",
  servings: "6 sandwiches"
)

falafel = Recipe.create!(
  title: "Baked Falafel",
  author: maureen,
  cook_time: "45 minutes",
  servings: "6 sandwiches"
)

pumpkin_soup = Recipe.create!(
  title: "Pumpkin Black Bean Soup",
  author: will,
  cook_time: "1 hour 15 minutes",
  servings: "5 bowls"
)

sundae = Recipe.create!(
  title: "Ice Cream Sundae",
  author: sophie,
  cook_time: "30 minutes",
  servings: "1 sundae"
)

risotto = Recipe.create!(
  title: "Risotto",
  author: will,
  cook_time: "1 hour",
  servings: "4 servings"
)

brisket = Recipe.create!(
  title: "Brisket",
  author: vik_spice,
  cook_time: "7 hours",
  servings: "5 servings"
)

pad_thai = Recipe.create!(
  title: "Pad Thai",
  author: maureen,
  cook_time: "45 minutes",
  servings: "4 servings"
)

pelmeni = Recipe.create!(
  title: "Pelmeni",
  author: will,
  cook_time: "1 hour",
  servings: "24 dumplings"
)

baba_ganoush = Recipe.create!(
  title: "Baba Ganoush",
  author: sophie,
  cook_time: "1 hour",
  servings: "4 cups"
)

ramen = Recipe.create!(
  title: "Wonton Soup",
  author: david,
  cook_time: "1 hour 30 minutes",
  servings: "4 servings"
)

RecipeSave.destroy_all

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: muffins
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: mayo
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: smoothie
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: hot_sauce
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: sesame_noodles
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: popcorn
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: hummus
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: burrito
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: chicken_curry
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: pad_kee_mao
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: pupusas
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: falafel
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: pumpkin_soup
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: ramen
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: hummus
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: smoothie
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: hot_sauce
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: pelmeni
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: popcorn
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: pad_thai
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: sundae
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: pumpkin_soup
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: falafel
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: pupusas
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: gratin
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: risotto
)


user_3_id = User.first.id + 2

counter = 0
User.all.each.with_index do |user, i|
  next if i < 2
  Recipe.all.each.with_index do |recipe, j|
    if counter % 4 == 0
      RecipeSave.create!(
        recipe_box: user.recipe_box,
        recipe: recipe
      )
    end
    counter += 1
  end
end
