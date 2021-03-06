# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Ingredient.destroy_all
PreparationStep.destroy_all
Recipe.destroy_all
RecipePhoto.destroy_all
Cook.destroy_all
Rating.destroy_all
Tag.destroy_all
Tagging.destroy_all
Note.destroy_all
NoteLike.destroy_all

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

pulled_pork_sandwich = Recipe.create!(
  title: "Pulled Pork Sandwich",
  author: david,
  cook_time: "7 hours",
  servings: "6 sandwiches"
)

RecipePhoto.create!(
  recipe: pulled_pork_sandwich,
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

creme_brulee = Recipe.create!(
  title: "Irish Cream Crème Brûlée",
  description: "This creme brulee is a great twist on a classic english recipe with the irish cream giving it a distinctive creamy flavor. Once the custard has been baked, I like to use a butane torch to broil the sugar. This gives the dessert a crispy texture on the surface. Serve with whipping cream and berries.",
  author: maureen,
  cook_time: "1 hour, 25 minutes",
  servings: "1 cup"
)

Ingredient.create!(
  name: "cups heavy cream",
  quantity: "2",
  recipe: creme_brulee
)

Ingredient.create!(
  name: "cup sugar",
  quantity: "1/3",
  recipe: creme_brulee
)

Ingredient.create!(
  name: "egg yolks",
  quantity: "6",
  recipe: creme_brulee
)

Ingredient.create!(
  name: "teaspoon vanilla extract",
  quantity: "1",
  recipe: creme_brulee
)

Ingredient.create!(
  name: "tablespoons Irish cream liqueur",
  quantity: "3",
  recipe: creme_brulee
)

Ingredient.create!(
  name: "superfine sugar as needed",
  quantity: "",
  recipe: creme_brulee
)

PreparationStep.create!(
  description: "Preheat oven to 300 degrees F (150 degrees C). Place 6 ramekins on a towel set in a roasting pan at least 3 inches deep.",
  step_number: 1,
  recipe: creme_brulee
)

PreparationStep.create!(
  description: "Stir together cream and sugar in a saucepan over medium heat, and cook until very hot, stirring until the sugar dissolves. Whisk together egg yolks, vanilla, and Irish cream until combined. Slowly add 1/3 of the hot cream, whisking it in 2 tablespoons at a time until incorporated. Once you have incorporated 1/3 of the cream, you can stir in the remaining hot cream without fear of the mixture curdling.",
  step_number: 2,
  recipe: creme_brulee
)

PreparationStep.create!(
  description: "Pour custard into the ramekins, then fill roasting pan with boiling hot water to come halfway up the sides of the ramekins. Bake in preheated oven until set, 50 to 60 minutes.",
  step_number: 3,
  recipe: creme_brulee
)

PreparationStep.create!(
  description: "Once the custard has set, place ramekins on a wire rack, and allow to cool to room temperature, about 1 hour. Cover, and refrigerate until cold, about 4 hours. Custards may remain refrigerated until ready to serve.",
  step_number: 4,
  recipe: creme_brulee
)

PreparationStep.create!(
  description: "Unwrap the custards, and sprinkle about 1 teaspoon of superfine sugar onto each. Gently shake the custards so the sugar coats the entire top surface, then tip the custards to a 45 degree angle and shake off excess sugar.",
  step_number: 5,
  recipe: creme_brulee
)

PreparationStep.create!(
  description: "Using a small hand torch, melt the sugar by making short passes over top of the custards with the flame not quite touching. Continue melting the sugar until it turns deep brown. Once the sugar has melted and turned to caramel, the cold custard underneath will harden the sugar into a crispy crust. Serve immediately. Alternatively, the sugar-dusted custards may be browned underneath the broiler in the oven.",
  step_number: 6,
  recipe: creme_brulee
)

# original photo https://c2.staticflickr.com/2/1321/1056410969_9f042e9306_o.jpg
RecipePhoto.create!(
  recipe: creme_brulee,
  large_url: "https://c2.staticflickr.com/2/1321/1056410969_d042cc3179_z.jpg",
  thumb_url: "https://c2.staticflickr.com/2/1321/1056410969_d042cc3179_n.jpg",
  credit: "Sebastian Mary"
)

african_soup = Recipe.create!(
  title: "African Peanut Soup",
  description: "Made with familiar ingredients you likely have on hand, this unique soup is irresistibly rich, cream and ready in only 30 minutes.",
  author: will,
  cook_time: "30 minutes",
  servings: "8 servings"
)

Ingredient.create!(
  name: "tablespoon extra-virgin olive oil",
  quantity: "1",
  recipe: african_soup
)

Ingredient.create!(
  name: "tablespoons fresh ginger, grated",
  quantity: "1 1/2",
  recipe: african_soup
)

Ingredient.create!(
  name: "cloves garlic, minced",
  quantity: "2",
  recipe: african_soup
)

Ingredient.create!(
  name: "shallots, diced",
  quantity: "2",
  recipe: african_soup
)

Ingredient.create!(
  name: "cups sweet potatoes, peeled",
  quantity: "3",
  recipe: african_soup
)

Ingredient.create!(
  name: "teaspoon ground cumin",
  quantity: "1",
  recipe: african_soup
)

Ingredient.create!(
  name: "teaspoon ground coriander",
  quantity: "1",
  recipe: african_soup
)

Ingredient.create!(
  name: "28-ounces can diced tomatoes",
  quantity: "1",
  recipe: african_soup
)

Ingredient.create!(
  name: "cup natural creamy peanut butter",
  quantity: "1/2",
  recipe: african_soup
)

Ingredient.create!(
  name: "cups vegetable broth",
  quantity: "5",
  recipe: african_soup
)

Ingredient.create!(
  name: "cup quinoa, dry",
  quantity: "1/4",
  recipe: african_soup
)

Ingredient.create!(
  name: "teapsoon sea salt",
  quantity: "1/2",
  recipe: african_soup
)

Ingredient.create!(
  name: "cup fresh cilantro, chopped, for garnish",
  quantity: "1/4",
  recipe: african_soup
)

Ingredient.create!(
  name: "cup unsalted roasted peanuts, for garnish",
  quantity: "1/2",
  recipe: african_soup
)

PreparationStep.create!(
  description: "In a large pot, heat oil over medium heat. Add ginger, garlic and shallots. Sauté for 4 minutes or until soft and fragrant.",
  step_number: 1,
  recipe: african_soup
)

PreparationStep.create!(
  description: "Add sweet potato, cumin and corriander. Stir to combine, then add diced tomatoes and peanut butter. Stir until ingredients are evenly combined. Add broth and stir again. Bring to boil, reduce heat to low and simmer 10 minutes.",
  step_number: 2,
  recipe: african_soup
)

PreparationStep.create!(
  description: "Add quinoa and simmer 15 minutes, or until sweet potatoes are very soft and quinoa is cooked.",
  step_number: 3,
  recipe: african_soup
)

PreparationStep.create!(
  description: "Add salt and stir to combine. If you prefer a cream soup, use a blender or immersion blender to puree. Serve with cilantro and peanuts as garnish.",
  step_number: 4,
  recipe: african_soup
)

# original url: https://c1.staticflickr.com/3/2693/4098420855_d63c1756bc_o.jpg
RecipePhoto.create!(
  recipe: african_soup,
  large_url: "https://c1.staticflickr.com/3/2693/4098420855_35cfed29e0.jpg",
  thumb_url: "https://c1.staticflickr.com/3/2693/4098420855_35cfed29e0_n.jpg",
  credit: "Bunches and Bits {Karina}"
)

best_ever_cookies = Recipe.create!(
  title: "Best Ever Cookies",
  author: david,
  cook_time: "20 minutes",
  servings: "24 cookies"
)

Ingredient.create!(
  name: "cup butter",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "cup sugar",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "cup packed brown sugar",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "teaspoon vanilla",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "egg",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "cup oil",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "cup oatmeal",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "cup crushed cornflakes",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "cup shredded coconut",
  quantity: "1/2",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "cup chopped pecans",
  quantity: "1/2",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "cups sifted flour",
  quantity: "3-1/2",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "teaspoon baking soda",
  quantity: "1",
  recipe: best_ever_cookies
)

Ingredient.create!(
  name: "teaspoon salt",
  quantity: "1",
  recipe: best_ever_cookies
)

PreparationStep.create!(
  description: "Preheat oven to 325 degrees. Cream butter and sugars, add vanilla and egg, then oil, oats, cornflakes, coconut, and pecans and stir well. Next add flour, salt and baking soda.",
  step_number: 1,
  recipe: best_ever_cookies
)

PreparationStep.create!(
  description: "Form dough into balls and then flatten them with a fork that has been dipped in water.",
  step_number: 2,
  recipe: best_ever_cookies
)

PreparationStep.create!(
  description: "Place dough on cookie sheets and bake for about 12 minutes.",
  step_number: 3,
  recipe: best_ever_cookies
)

# original url: https://c2.staticflickr.com/8/7170/6827104103_8544ee2fd9_o.jpg
RecipePhoto.create!(
  recipe: best_ever_cookies,
  large_url: "https://c2.staticflickr.com/8/7170/6827104103_37c5b76004_z.jpg",
  thumb_url: "https://c2.staticflickr.com/8/7170/6827104103_37c5b76004_n.jpg",
  credit: "jeffreyw"
)

chevre_spread = Recipe.create!(
  title: "Warm Chèvre Spread w/ Tomatoes and Basil",
  author: sophie,
  cook_time: "20 minutes",
  servings: "1 1/2 cup"
)

Ingredient.create!(
  name: "teaspoon olive oil",
  quantity: "1",
  recipe: chevre_spread
)

Ingredient.create!(
  name: "ounces chèvre",
  quantity: "4",
  recipe: chevre_spread
)

Ingredient.create!(
  name: "ounces cream cheese",
  quantity: "3",
  recipe: chevre_spread
)

Ingredient.create!(
  name: "cup drained, chopped, oil-packed sundried tomatoes",
  quantity: "1/3",
  recipe: chevre_spread
)

Ingredient.create!(
  name: "cup chopped fresh basil",
  quantity: "1/4",
  recipe: chevre_spread
)

Ingredient.create!(
  name: "teaspoon chopped garlic",
  quantity: "1/2",
  recipe: chevre_spread
)

PreparationStep.create!(
  description: "Preheat oven to 400 degrees. Lightly coat a small oven proof serving dish with oil. Crumble chèvre into dish and add chunks of cream cheese. Bake for 10-12 minutes or until soft and melting.",
  step_number: 1,
  recipe: chevre_spread
)

PreparationStep.create!(
  description: "Meanwhile, combine the tomatoes, basil and garlic. Remove dish from the oven and stir cheeses together. Top with tomato mixture and serve hot with crackers.",
  step_number: 2,
  recipe: chevre_spread
)

RecipePhoto.create!(
  recipe: chevre_spread,
  large_url: "https://c2.staticflickr.com/6/5057/5445479136_f3b1f9dd66_z.jpg",
  thumb_url: "https://c2.staticflickr.com/6/5057/5445479136_f3b1f9dd66_n.jpg",
  credit: "B*2"
)

corn_dip = Recipe.create!(
  title: "Baked Corn Dip",
  author: maureen,
  description: "This corn is great for parties, and will leave you time to focus on other dishes.",
  cook_time: "30 minutes",
  servings: "5 cups"
)

Ingredient.create!(
  name: "15-ounce can corn, drained",
  quantity: "1",
  recipe: corn_dip
)

Ingredient.create!(
  name: "ounces cream cheese",
  quantity: "8",
  recipe: corn_dip
)

Ingredient.create!(
  name: "4-ounce can diced green chilies",
  quantity: "1",
  recipe: corn_dip
)

Ingredient.create!(
  name: "4-ounce can chopped jalapeños",
  quantity: "1",
  recipe: corn_dip
)

Ingredient.create!(
  name: "cup grated cheddar cheese",
  quantity: "1",
  recipe: corn_dip
)

PreparationStep.create!(
  description: "Preheat oven to 350 degrees. Combine all ingredients except for 1/2 cup of the cheddar cheese.",
  step_number: 1,
  recipe: corn_dip
)

PreparationStep.create!(
  description: "Put dip in baking dish and top with the remaining cheese. Bake for 20-25 minutes or until bubbly Serve with chips.",
  step_number: 2,
  recipe: corn_dip
)

RecipePhoto.create!(
  recipe: corn_dip,
  large_url: "https://c1.staticflickr.com/1/85/264165847_d55d5a9c87.jpg",
  thumb_url: "https://c1.staticflickr.com/1/85/264165847_d55d5a9c87_m.jpg",
  credit: "I Believe I Can Fry"
)

hot_sauce = Recipe.create!(
  title: "Spicy Salsa",
  author_id: will.id,
  cook_time: "5 minutes",
  servings: "3 cups"
)


# extra-large: https://c2.staticflickr.com/8/7035/6637805197_74bae4838e_o.jpg
RecipePhoto.create!(
  recipe: hot_sauce,
  large_url: "https://c2.staticflickr.com/8/7035/6637805197_b50e7a6b36_z.jpg",
  thumb_url: "https://c2.staticflickr.com/8/7035/6637805197_b50e7a6b36_n.jpg",
  credit: "vanesscipes"
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

chocolate_cookies = Recipe.create!(
  title: "Easy Chocolate Cookies",
  description: "Cookies don't have to take a lot of time to be delicious. These are ready in under a half hour.",
  author: will,
  cook_time: "20 minutes",
  servings: "24 cookies"
)

Ingredient.create!(
  name: "12 ounce bag semi-sweet chocolate chips",
  quantity: "1",
  recipe: chocolate_cookies
)

Ingredient.create!(
  name: "can sweetened condensed milk",
  quantity: "1",
  recipe: chocolate_cookies
)

Ingredient.create!(
  name: "cup chopped pecans",
  quantity: "1",
  recipe: chocolate_cookies
)

Ingredient.create!(
  name: "cup flour",
  quantity: "1",
  recipe: chocolate_cookies
)

Ingredient.create!(
  name: "teaspoon vanilla extract",
  quantity: "1",
  recipe: chocolate_cookies
)

PreparationStep.create!(
  description: "Preheat oven to 350 degrees. Melt chocolate chips and condensed milk together over the stove or in the microwave.",
  step_number: 1,
  recipe: chocolate_cookies
)

PreparationStep.create!(
  description: "Mix chocolate and milk together with the remaining ingredients. Place teaspoon size balls on a greased cookie sheet. Bake for 7-9 minutes.",
  step_number: 2,
  recipe: chocolate_cookies
)

RecipePhoto.create!(
  recipe: chocolate_cookies,
  large_url: "https://c1.staticflickr.com/9/8677/16090458382_9f4f3be980_z.jpg",
  thumb_url: "https://c1.staticflickr.com/9/8677/16090458382_9f4f3be980_n.jpg",
  credit: "p3nnylan3"
)

roasted_pork = Recipe.create!(
  title: "Garlic and Rosemary Roasted Pork",
  author: david,
  cook_time: "4 hours",
  servings: "6 servings"
)

Ingredient.create!(
  name: "14-16 ounces pork tenderloin",
  quantity: "1",
  recipe: roasted_pork
)

Ingredient.create!(
  name: "cup olive oil",
  quantity: "1/2",
  recipe: roasted_pork
)

Ingredient.create!(
  name: "cup balsamic vinegar",
  quantity: "1/4",
  recipe: roasted_pork
)

Ingredient.create!(
  name: "tablespoons cider vinegar",
  quantity: "2",
  recipe: roasted_pork
)

Ingredient.create!(
  name: "tablespoons honey",
  quantity: "2",
  recipe: roasted_pork
)

Ingredient.create!(
  name: "large garlic cloves",
  quantity: "3",
  recipe: roasted_pork
)

Ingredient.create!(
  name: "tablespoon chopped fresh rosemary",
  quantity: "1",
  recipe: roasted_pork
)

Ingredient.create!(
  name: "tablespoon Dijon mustard",
  quantity: "1",
  recipe: roasted_pork
)

PreparationStep.create!(
  description: "In a food processor, blend together all the ingredients except for the pork.",
  step_number: 1,
  recipe: roasted_pork
)

PreparationStep.create!(
  description: "Place the pork in a heavy plastic bag and pour 1/2 of the marinade over it. Refrigerate the rest of the marinade and put the pork in the fridge for a few hours or overnight.",
  step_number: 2,
  recipe: roasted_pork
)

PreparationStep.create!(
  description: "Put the pork on a baking sheet and spread the rest of the marinade over it. Bake for 40 minutes.",
  step_number: 3,
  recipe: roasted_pork
)

RecipePhoto.create!(
  recipe: roasted_pork,
  large_url: "https://c2.staticflickr.com/6/5243/5290330328_5016f0d222_z.jpg",
  thumb_url: "https://c2.staticflickr.com/6/5243/5290330328_5016f0d222_n.jpg",
  credit: "ugod"
)

pumpkin_bread = Recipe.create!(
  title: "Pumpkin Bread",
  description: "Pumpkin bread is a classic that should be enjoyed every fall. This makes enough to give you plenty to share.",
  author: will,
  cook_time: "1 hour 10 minutes",
  servings: "3 loaves"
)

Ingredient.create!(
  name: "cups sugar",
  quantity: "3",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "cup canola oil",
  quantity: "1",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "teaspoon vanilla",
  quantity: "1",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "eggs",
  quantity: "3",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "15-ounce can pumpkin",
  quantity: "1",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "teaspoon cinnamon",
  quantity: "1",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "teaspoon allspice",
  quantity: "1",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "teaspoon nutmeg",
  quantity: "1",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "teaspoon cloves",
  quantity: "1",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "baking powder",
  quantity: "1",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "teaspoon baking soda",
  quantity: "1/2",
  recipe: pumpkin_bread
)

Ingredient.create!(
  name: "cups flour",
  quantity: "3",
  recipe: pumpkin_bread
)

PreparationStep.create!(
  description: "Preheat oven to 350 degrees. Mix together wet ingredients and dry ingredients separately. Then mix the two together. Be careful not to overwork.",
  step_number: 1,
  recipe: pumpkin_bread
)

PreparationStep.create!(
  description: "Put batter into three baking pans and bake for an hour. Let cool before removing from pan.",
  step_number: 2,
  recipe: pumpkin_bread
)


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
  original_height: 1360,
  original_width: 2048,
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

# xl url: https://c1.staticflickr.com/9/8469/8095027893_3d53bb5fc3_k.jpg
RecipePhoto.create!(
  recipe: pumpkin_bread,
  large_url: "https://c1.staticflickr.com/9/8469/8095027893_3d53bb5fc3_k.jpg",
  thumb_url: "https://c1.staticflickr.com/9/8469/8095027893_9b110b7eac_n.jpg",
  credit: "grongar"
)

RecipeSave.destroy_all

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: muffins
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: pumpkin_bread
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: african_soup
)

RecipeSave.create!(
  recipe_box: will.recipe_box,
  recipe: roasted_pork
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
  recipe: best_ever_cookies
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: african_soup
)

RecipeSave.create!(
  recipe_box: maureen.recipe_box,
  recipe: chocolate_cookies
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

User.all.each.with_index do |user, i|
  next if i < 2
  Recipe.all.each.with_index do |recipe, j|
    if rand > 0.62
      RecipeSave.create!(
        recipe_box: user.recipe_box,
        recipe: recipe
      )
    end
  end
end


User.all.each.with_index do |user, i|
  Recipe.all.each.with_index do |recipe, j|
    if rand > 0.8
      Cook.create!(
        user: user,
        recipe: recipe
      )
    end
  end
end


User.all.each.with_index do |user, i|
  Recipe.all.each.with_index do |recipe, j|
    if rand > 0.7
      score = rand(5) + 1
      score += 1 if rand > 0.5 && score < 5
      score += 1 if rand > 0.5 && score < 5
      Rating.create!(
        user: user,
        recipe: recipe,
        score: score
      )
    end
  end
end


healthy = Tag.create!(name: "Healthy")
vegetarian = Tag.create!(name: "Vegetarian")
muffins_tag = Tag.create!(name: "Muffins")
rice = Tag.create!(name: "Rice")
cheese = Tag.create!(name: "Cheese")
dumplings = Tag.create!(name: "Dumplings")
pork = Tag.create!(name: "Pork")
pie = Tag.create!(name: "Pie")
sauce = Tag.create!(name: "Sauce")
noodles = Tag.create!(name: "Noodles")
potatoes = Tag.create!(name: "Potatoes")
condiment = Tag.create!(name: "Condiment")
soup = Tag.create!(name: "Soup")
sandwich = Tag.create!(name: "Sandwich")
ice_cream = Tag.create!(name: "Ice Cream")
french = Tag.create!(name: "French")
italian = Tag.create!(name: "Italian")
latin = Tag.create!(name: "Latin")
mexican = Tag.create!(name: "Mexican")
middle_eastern = Tag.create!(name: "Middle Eastern")
indian = Tag.create!(name: "Indian")
thai = Tag.create!(name: "Thai")
spicy = Tag.create!(name: "Spicy")
sweet = Tag.create!(name: "Sweet")
breakfast = Tag.create!(name: "Breakfast")
lunch = Tag.create!(name: "Lunch")
dinner = Tag.create!(name: "Dinner")
dessert = Tag.create!(name: "Dessert")
snack = Tag.create!(name: "Snack")
drink = Tag.create!(name: "Drink")
alcohol = Tag.create!(name: "Alcohol")
kosher = Tag.create!(name: "Kosher")
nut_free = Tag.create!(name: "Nut Free")


Tagging.create!(recipe: muffins, tag: healthy)
Tagging.create!(recipe: muffins, tag: vegetarian)
Tagging.create!(recipe: muffins, tag: muffins_tag)
Tagging.create!(recipe: muffins, tag: snack)
Tagging.create!(recipe: mayo, tag: condiment)
Tagging.create!(recipe: african_soup, tag: healthy)
Tagging.create!(recipe: african_soup, tag: vegetarian)
Tagging.create!(recipe: african_soup, tag: soup)
Tagging.create!(recipe: best_ever_cookies, tag: dessert)
Tagging.create!(recipe: best_ever_cookies, tag: sweet)
Tagging.create!(recipe: chocolate_cookies, tag: sweet)
Tagging.create!(recipe: chocolate_cookies, tag: dessert)
Tagging.create!(recipe: chevre_spread, tag: snack)
Tagging.create!(recipe: chevre_spread, tag: cheese)
Tagging.create!(recipe: chevre_spread, tag: french)
Tagging.create!(recipe: roasted_pork, tag: pork)
Tagging.create!(recipe: roasted_pork, tag: dinner)
Tagging.create!(recipe: pumpkin_bread, tag: vegetarian)
Tagging.create!(recipe: pumpkin_bread, tag: sweet)
Tagging.create!(recipe: pumpkin_bread, tag: breakfast)
Tagging.create!(recipe: corn_dip, tag: snack)
Tagging.create!(recipe: creme_brulee, tag: dessert)
Tagging.create!(recipe: creme_brulee, tag: vegetarian)
Tagging.create!(recipe: creme_brulee, tag: kosher)
Tagging.create!(recipe: creme_brulee, tag: nut_free)
Tagging.create!(recipe: hot_sauce, tag: spicy)
Tagging.create!(recipe: hot_sauce, tag: sauce)
Tagging.create!(recipe: hot_sauce, tag: condiment)
Tagging.create!(recipe: smoothie, tag: healthy)
Tagging.create!(recipe: smoothie, tag: drink)
Tagging.create!(recipe: smoothie, tag: snack)
Tagging.create!(recipe: udon, tag: soup)
Tagging.create!(recipe: udon, tag: noodles)
Tagging.create!(recipe: hummus, tag: middle_eastern)
Tagging.create!(recipe: hummus, tag: vegetarian)
Tagging.create!(recipe: popcorn, tag: snack)
Tagging.create!(recipe: burrito, tag: mexican)
Tagging.create!(recipe: burrito, tag: lunch)
Tagging.create!(recipe: eggplant_parm, tag: dinner)
Tagging.create!(recipe: eggplant_parm, tag: italian)
Tagging.create!(recipe: eggplant_parm, tag: vegetarian)
Tagging.create!(recipe: marinara, tag: sauce)
Tagging.create!(recipe: marinara, tag: italian)
Tagging.create!(recipe: chicken_curry, tag: indian)
Tagging.create!(recipe: pancakes, tag: breakfast)
Tagging.create!(recipe: pecan_pie, tag: dessert)
Tagging.create!(recipe: pecan_pie, tag: pie)
Tagging.create!(recipe: margaritas, tag: alcohol)
Tagging.create!(recipe: margaritas, tag: drink)
Tagging.create!(recipe: margaritas, tag: mexican)
Tagging.create!(recipe: pad_kee_mao, tag: thai)
Tagging.create!(recipe: pad_kee_mao, tag: noodles)
Tagging.create!(recipe: pad_kee_mao, tag: spicy)
Tagging.create!(recipe: pupusas, tag: latin)
Tagging.create!(recipe: gratin, tag: french)
Tagging.create!(recipe: gratin, tag: potatoes)
Tagging.create!(recipe: gratin, tag: dinner)
Tagging.create!(recipe: pulled_pork_sandwich, tag: pork)
Tagging.create!(recipe: pulled_pork_sandwich, tag: sandwich)
Tagging.create!(recipe: falafel, tag: vegetarian)
Tagging.create!(recipe: falafel, tag: middle_eastern)
Tagging.create!(recipe: pumpkin_soup, tag: soup)
Tagging.create!(recipe: pumpkin_soup, tag: vegetarian)
Tagging.create!(recipe: pumpkin_soup, tag: healthy)
Tagging.create!(recipe: sundae, tag: dessert)
Tagging.create!(recipe: sundae, tag: ice_cream)
Tagging.create!(recipe: risotto, tag: rice)
Tagging.create!(recipe: risotto, tag: italian)
Tagging.create!(recipe: super_pig, tag: pork)
Tagging.create!(recipe: pad_thai, tag: thai)
Tagging.create!(recipe: pad_thai, tag: noodles)
Tagging.create!(recipe: pad_thai, tag: dinner)
Tagging.create!(recipe: pelmeni, tag: dumplings)
Tagging.create!(recipe: pelmeni, tag: breakfast)
Tagging.create!(recipe: baba_ganoush, tag: middle_eastern)
Tagging.create!(recipe: wonton, tag: soup)
Tagging.create!(recipe: wonton, tag: vegetarian)


dummy_comments = [
  "This was really good! Next time I make it I'm going to add more salt, though",
  "One of my new weekday go-tos",
  "I found this to be a bit too sweet",
  "I liked this, but it took me much longer than the directions state.",
  "I had high hopes for this, but in the end it was rather bland",
  "I'd make it again",
  "I doubled the ingredients put the leftovers in the freezer. Lunch for weeks!",
  "Delicious!!!",
  "Could use some more spices, but pretty good overall",
  "Nothing to get excited about I thought"
]

child_comments = [
  "Did you find it savory enough?",
  "Thanks for the info",
  "I'll have to try it myself",
  "Really? Interesting."
]

private_notes = [
  "Add more butter",
  "Throw some chopped nuts in at the end",
  "Good with a bit of pepper",
  "Made this for grandma's birthday"
]

comments = []

i = 0
Recipe.all.each do |recipe|
  User.all.each do |user|
    if rand > 0.7
      comments << recipe.notes.create!(
        author: user,
        body: dummy_comments[i % dummy_comments.length]
      )
      i += 1
    end
  end
end

i = 0
child_notes = []

comments.each do |parent_comment|
  if rand > 0.65 && !parent_comment.private
    child_notes << parent_comment.child_notes.create!(
      author: User.find(rand(User.first.id..User.last.id)),
      recipe: parent_comment.recipe,
      body: child_comments[i % child_comments.length]
    )
    i += 1
  end
end

comments.concat(child_notes).each do |comment|
  if rand < 0.3
    User.all.each do |user|
      if rand < 0.25
        comment.likes.create!(user: user)
      end
    end
  elsif rand < 0.5
    User.all.each do |user|
      if rand < 0.15
        comment.likes.create!(user: user)
      end
    end
  else
    User.all.each do |user|
      if rand < 0.05
        comment.likes.create!(user: user)
      end
    end
  end
end

User.all.each do |user|
  6.times do |i|
    user.notes.create!(
      recipe: Recipe.find(rand(Recipe.first.id..Recipe.last.id)),
      body: private_notes[i % private_notes.length],
      private: true
    )
  end
end
