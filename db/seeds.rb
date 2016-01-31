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
RecipePhoto.destroy_all

muffins = Recipe.create!(
  title: "Banana Nut Muffins",
  description: "These banana nut muffins make for a healthy breakfast or snack, and are easy to make. Adding cinnamon and other spices gives it a more complex flavor, and adding more banana in place of sugar makes them healthier while keeping them delicious.",
  author: will,
  cook_time: "40 minutes",
  servings: "12 muffins"
)

RecipePhoto.create!(
  recipe: muffins,
  large_url: "https://c1.staticflickr.com/7/6083/6150882978_e21655a053_o.jpg",
  thumb_url: "https://c1.staticflickr.com/7/6083/6150882978_85047c479e_n.jpg",
  credit: "jeffreyw"
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
  title: "Quick Mayonnaise",
  description: "Mayonnaise takes almost no time to make and tastes much better than anything from the store.",
  author: maureen,
  cook_time: "5 minutes",
  servings: "1 cup"
)

RecipePhoto.create!(
  recipe: mayo,
  large_url: "https://c1.staticflickr.com/5/4099/4795862818_ac2c47cde2_z.jpg",
  thumb_url: "https://c1.staticflickr.com/5/4099/4795862818_ac2c47cde2_n.jpg",
  credit: "jules:stonesoup"
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

RecipePhoto.create!(
  recipe: hot_sauce,
  large_url: "https://c2.staticflickr.com/8/7035/6637805197_74bae4838e_o.jpg",
  thumb_url: "https://c2.staticflickr.com/8/7035/6637805197_b50e7a6b36_n.jpg",
  credit: "jeffreyw"
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

RecipePhoto.create!(
  recipe: smoothie,
  large_url: "https://c1.staticflickr.com/9/8542/8699152877_1d524027c1_z.jpg",
  thumb_url: "https://c1.staticflickr.com/9/8542/8699152877_1d524027c1.jpg",
  credit: "q3studio"
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

udon = Recipe.create!(
  title: "Udon Noodle Soup",
  author: maureen,
  cook_time: "45 minutes",
  servings: "4 servings"
)

RecipePhoto.create!(
  recipe: udon,
  large_url: "https://c1.staticflickr.com/3/2075/1777735659_6da1611f07.jpg",
  thumb_url: "https://c1.staticflickr.com/3/2075/1777735659_6da1611f07_n.jpg",
  credit: "Young Sok Yun"
)

hummus = Recipe.create!(
  title: "Hummus",
  author: will,
  cook_time: "1 1/2 hours",
  servings: "4 cups"
)

RecipePhoto.create!(
  recipe: hummus,
  large_url: "https://c2.staticflickr.com/6/5326/7149255929_dee97c4bb7.jpg",
  thumb_url: "https://c2.staticflickr.com/6/5326/7149255929_dee97c4bb7_n.jpg",
  credit: "Evgeni Zotov"
)

popcorn = Recipe.create!(
  title: "Caramel Popcorn",
  author: sophie,
  cook_time: "30 minutes",
)

RecipePhoto.create!(
  recipe: popcorn,
  large_url: "https://c2.staticflickr.com/2/1310/648222091_bdda57a0e9.jpg",
  thumb_url: "https://c2.staticflickr.com/2/1310/648222091_bdda57a0e9.jpg",
  credit: "ulterior epicure"
)

burrito = Recipe.create!(
  title: "Catfish Burrito",
  author: david,
  cook_time: "45 minutes"
)

RecipePhoto.create!(
  recipe: burrito,
  large_url: "https://c1.staticflickr.com/9/8263/8628568071_737137f1c3_h.jpg",
  thumb_url: "https://c1.staticflickr.com/9/8263/8628568071_ecbf18a51d_n.jpg",
  credit: "jeffreyw"
)

eggplant_parm = Recipe.create!(
  title: "Eggplant Parmesan",
  author: maureen,
  cook_time: "1 1/2 hours"
)

RecipePhoto.create!(
  recipe: eggplant_parm,
  large_url: "https://c2.staticflickr.com/8/7203/6928717425_a6099fd4a4_z.jpg",
  thumb_url: "https://c2.staticflickr.com/8/7203/6928717425_a6099fd4a4_n.jpg",
  credit: "Jean-François Chénier"
)

marinara = Recipe.create!(
  title: "Weeknight Marinara",
  author: will,
  cook_time: "30 minutes"
)

RecipePhoto.create!(
  recipe: marinara,
  large_url: "https://c2.staticflickr.com/4/3777/13257080663_93bd76ccc7.jpg",
  thumb_url: "https://c2.staticflickr.com/4/3777/13257080663_93bd76ccc7_n.jpg",
  credit: "jeffreyw"
)

chicken_curry = Recipe.create!(
  title: "Chicken Curry",
  author: david,
  cook_time: "1 hour"
)

RecipePhoto.create!(
  recipe: chicken_curry,
  large_url: "https://c2.staticflickr.com/8/7150/6780438801_1c6b4ee069_z.jpg",
  thumb_url: "https://c2.staticflickr.com/8/7150/6780438801_1c6b4ee069_n.jpg",
  credit: "Nadir Hashmi"
)

pancakes = Recipe.create!(
  title: "Blueberry Pancakes",
  author: will,
  cook_time: "25 minutes"
)

RecipePhoto.create!(
  recipe: pancakes,
  large_url: "https://c2.staticflickr.com/4/3148/2686805971_0d0a98fcbd_o.jpg",
  thumb_url: "https://c2.staticflickr.com/4/3148/2686805971_50b03612c7_n.jpg",
  credit: "Young Sok Yun"
)

pecan_pie = Recipe.create!(
  title: "Chocolate Pecan Pie",
  author: maureen,
  cook_time: "2 hours",
  servings: "6-8 slices"
)

RecipePhoto.create!(
  recipe: pecan_pie,
  large_url: "https://c2.staticflickr.com/6/5010/5286276345_dfe77d4d6e_o.jpg",
  thumb_url: "https://c2.staticflickr.com/6/5010/5286276345_c7fb99390b_n.jpg",
  credit: "Pearl Pirie"
)

margaritas = Recipe.create!(
  title: "Frozen Margaritas",
  author: will,
  cook_time: "2 hours",
  servings: "8 drinks"
)

RecipePhoto.create!(
  recipe: margaritas,
  large_url: "https://c2.staticflickr.com/4/3661/3514397858_a281859c21_z.jpg",
  thumb_url: "https://c2.staticflickr.com/4/3661/3514397858_a281859c21.jpg",
  credit: "Robert S. Donovan"
)

pad_kee_mao = Recipe.create!(
  title: "Pad Kee Mao",
  author: david,
  cook_time: "40 minutes",
  servings: "4 servings"
)

RecipePhoto.create!(
  recipe: pad_kee_mao,
  large_url: "https://c2.staticflickr.com/4/3281/3005960647_58da483d4b.jpg",
  thumb_url: "https://c2.staticflickr.com/4/3281/3005960647_58da483d4b.jpg",
  credit: "Young Sok Yun"
)

pupusas = Recipe.create!(
  title: "Bean and Cheese Pupusas",
  author: sophie,
  cook_time: "1 hour",
  servings: "About 15 pupusas"
)

RecipePhoto.create!(
  recipe: pupusas,
  large_url: "https://c2.staticflickr.com/4/3516/3716608676_c56e84fea9_o.jpg",
  thumb_url: "https://c2.staticflickr.com/4/3516/3716608676_1abb383428.jpg",
  credit: "cherrypatter"
)

gratin = Recipe.create!(
  title: "Gratin Dauphinois",
  author: will,
  cook_time: "1 hour",
  servings: "6 servings"
)

RecipePhoto.create!(
  recipe: gratin,
  large_url: "https://c1.staticflickr.com/7/6027/5970146365_336c8e03fa_z.jpg",
  thumb_url: "https://c1.staticflickr.com/7/6027/5970146365_336c8e03fa_n.jpg",
  credit: "JaBB"
)

pulled_pork_sammy = Recipe.create!(
  title: "Pulled Pork Sandwich",
  author: david,
  cook_time: "7 hours",
  servings: "6 sandwiches"
)

RecipePhoto.create!(
  recipe: pulled_pork_sammy,
  large_url: "https://c2.staticflickr.com/6/5042/5252935828_7427ca3865_o.jpg",
  thumb_url: "https://c2.staticflickr.com/6/5042/5252935828_43b489834c_n.jpg",
  credit: "jeffreyw"
)

falafel = Recipe.create!(
  title: "Baked Falafel",
  author: maureen,
  cook_time: "45 minutes",
  servings: "6 sandwiches"
)

RecipePhoto.create!(
  recipe: falafel,
  large_url: "https://c1.staticflickr.com/9/8519/8561341670_ac836845df_z.jpg",
  thumb_url: "https://c1.staticflickr.com/9/8519/8561341670_ac836845df_n.jpg",
  credit: "SweetOnVeg"
)

pumpkin_soup = Recipe.create!(
  title: "Pumpkin Black Bean Soup",
  author: will,
  cook_time: "1 hour 15 minutes",
  servings: "5 bowls"
)

RecipePhoto.create!(
  recipe: pumpkin_soup,
  large_url: "https://c1.staticflickr.com/3/2807/10598921744_ab650a0047_h.jpg",
  thumb_url: "https://c1.staticflickr.com/3/2807/10598921744_ded00597bb_n.jpg",
  credit: "jeffreyw"
)

sundae = Recipe.create!(
  title: "Ice Cream Sundae",
  author: sophie,
  cook_time: "30 minutes",
  servings: "1 sundae"
)

RecipePhoto.create!(
  recipe: sundae,
  large_url: "https://c2.staticflickr.com/8/7426/9567951921_cebd604e8e_z.jpg",
  thumb_url: "https://c2.staticflickr.com/8/7426/9567951921_cebd604e8e_n.jpg",
  credit: "Foodie Baker"
)

risotto = Recipe.create!(
  title: "Risotto",
  author: will,
  cook_time: "1 hour",
  servings: "4 servings"
)

RecipePhoto.create!(
  recipe: risotto,
  large_url: "https://c1.staticflickr.com/9/8733/16751919278_0a14d3a102_h.jpg",
  thumb_url: "https://c1.staticflickr.com/9/8733/16751919278_4a0f84fd88_n.jpg",
  credit: "Luca Nebuloni"
)

super_pig = Recipe.create!(
  title: "Super Pig",
  author: vik_spice,
  cook_time: "7 hours",
  servings: "5 servings"
)

RecipePhoto.create!(
  recipe: super_pig,
  large_url: "https://c1.staticflickr.com/1/118/277782049_30c7889b67_z.jpg",
  thumb_url: "https://c1.staticflickr.com/1/118/277782049_30c7889b67_n.jpg",
  credit: "Christopher Aloi"
)

pad_thai = Recipe.create!(
  title: "Pad Thai",
  author: maureen,
  cook_time: "45 minutes",
  servings: "4 servings"
)

RecipePhoto.create!(
  recipe: pad_thai,
  large_url: "https://c1.staticflickr.com/9/8460/7885126030_cea22d0b96_h.jpg",
  thumb_url: "https://c1.staticflickr.com/9/8460/7885126030_9128750abc_n.jpg",
  credit: "Jean-François Chénier"
)

pelmeni = Recipe.create!(
  title: "Pelmeni",
  author: will,
  cook_time: "1 hour",
  servings: "24 dumplings"
)

RecipePhoto.create!(
  recipe: pelmeni,
  large_url: "https://c2.staticflickr.com/4/3083/2685579511_59f8f326ca_z.jpg",
  thumb_url: "https://c2.staticflickr.com/4/3083/2685579511_59f8f326ca.jpg",
  credit: "ais3n"
)

baba_ganoush = Recipe.create!(
  title: "Baba Ganoush",
  author: sophie,
  cook_time: "1 hour",
  servings: "4 cups"
)

RecipePhoto.create!(
  recipe: baba_ganoush,
  large_url: "https://c1.staticflickr.com/5/4093/5602938902_32a326143d_o.jpg",
  thumb_url: "https://c1.staticflickr.com/5/4093/5602938902_9cf6d404d3_n.jpg",
  credit: "Stijn Nieuwendijk"
)


wonton = Recipe.create!(
  title: "Wonton Soup",
  author: david,
  cook_time: "1 hour 30 minutes",
  servings: "4 servings"
)

RecipePhoto.create!(
  recipe: wonton,
  large_url: "https://c2.staticflickr.com/2/1497/23656052023_bdc853d5ab_h.jpg",
  thumb_url: "https://c2.staticflickr.com/2/1497/23656052023_daffd5e6b9_n.jpg",
  credit: "Tim Sackton"
)

RecipeSave.destroy_all

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: muffins
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: wonton
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
  recipe: udon
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
  recipe: wonton
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

User.all.each.with_index do |user, i|
  Recipe.all.each.with_index do |recipe, j|
    if counter % 5 == 0
      Cook.create!(
        user: user,
        recipe: recipe
      )
    end
    counter += 1
  end
end
