# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

will = User.new(
  email: "wrmcmeans@gmail.com",
  password: "starwars",
  name: "William McMeans"
)

maureen = User.new(
  email: "maureen@gmail.com",
  password: "starwars",
  name: "Maureen Griswold",
)

david = User.new(
  email: "davidjones@gmail.com",
  password: "starwars",
  name: "David Jones"
)

sophie = User.new(
  email: "sophied@gmail.com",
  password: "starwars",
  name: "Sophie DiIorio"
)

user1 = User.new(
  email: "adam33@gmail.com",
  password: "movies"
)

user2 = User.new(
  email: "kylew90@comcast.net",
  password: "ilovefood",
  name: "Kyle"
)

user3 = User.new(
  email: "funnychef12@hotmail.com",
  password: "cooking"
)

user4 = User.new(
  email: "melissa.c.lee@gmail.com",
  password: "muffins",
  name: "Melissa"
)

user5 = User.new(
  email: "tsmith2010@live.com",
  password: "@@secret@@"
)

user6 = User.new(
  email: "thehammer50@aol.com",
  password: "aol?!?!",
  name: "Matt"
)

user7 = User.new(
  email: "annerobbins@gmail.com",
  password: "fooood"
)

user8 = User.new(
  email: "aec1977@gmail.com",
  password: "p455w0rd"
)

user9 = User.new(
  email: "giantsfan88@gmail.com",
  password: "vanilla",
  name: "Paul Ramirez"
)

user10 = User.new(
  email: "lspeterson@gmail.com",
  password: "cupcakes"
)

Recipe.destroy_all

blueberry_muffins = Recipe.new(
  
)
