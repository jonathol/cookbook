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
