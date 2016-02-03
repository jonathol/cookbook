# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160203224454) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cooks", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "recipe_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "cooks", ["user_id", "recipe_id"], name: "index_cooks_on_user_id_and_recipe_id", unique: true, using: :btree

  create_table "ingredients", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "quantity"
    t.integer  "recipe_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ingredients", ["recipe_id"], name: "index_ingredients_on_recipe_id", using: :btree

  create_table "note_likes", force: :cascade do |t|
    t.integer  "note_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "note_likes", ["note_id", "user_id"], name: "index_note_likes_on_note_id_and_user_id", unique: true, using: :btree
  add_index "note_likes", ["note_id"], name: "index_note_likes_on_note_id", using: :btree
  add_index "note_likes", ["user_id"], name: "index_note_likes_on_user_id", using: :btree

  create_table "notes", force: :cascade do |t|
    t.text     "body",                       null: false
    t.integer  "recipe_id",                  null: false
    t.integer  "parent_id"
    t.boolean  "private",    default: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "author_id",                  null: false
  end

  add_index "notes", ["parent_id"], name: "index_notes_on_parent_id", using: :btree
  add_index "notes", ["recipe_id"], name: "index_notes_on_recipe_id", using: :btree

  create_table "preparation_steps", force: :cascade do |t|
    t.text     "description", null: false
    t.integer  "step_number", null: false
    t.integer  "recipe_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "preparation_steps", ["recipe_id", "step_number"], name: "index_preparation_steps_on_recipe_id_and_step_number", unique: true, using: :btree
  add_index "preparation_steps", ["recipe_id"], name: "index_preparation_steps_on_recipe_id", using: :btree

  create_table "ratings", force: :cascade do |t|
    t.integer  "recipe_id",  null: false
    t.integer  "user_id",    null: false
    t.integer  "score",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "ratings", ["recipe_id", "user_id"], name: "index_ratings_on_recipe_id_and_user_id", unique: true, using: :btree

  create_table "recipe_boxes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "recipe_boxes", ["user_id"], name: "index_recipe_boxes_on_user_id", unique: true, using: :btree

  create_table "recipe_photos", force: :cascade do |t|
    t.integer  "recipe_id",  null: false
    t.string   "large_url"
    t.string   "thumb_url",  null: false
    t.string   "credit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "recipe_photos", ["recipe_id"], name: "index_recipe_photos_on_recipe_id", unique: true, using: :btree

  create_table "recipe_saves", force: :cascade do |t|
    t.integer  "recipe_box_id", null: false
    t.integer  "recipe_id",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "recipe_saves", ["recipe_box_id", "recipe_id"], name: "index_recipe_saves_on_recipe_box_id_and_recipe_id", unique: true, using: :btree

  create_table "recipes", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.integer  "author_id",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "cook_time"
    t.string   "servings"
  end

  add_index "recipes", ["author_id"], name: "index_recipes_on_author_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",     null: false
    t.integer  "recipe_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "taggings", ["tag_id", "recipe_id"], name: "index_taggings_on_tag_id_and_recipe_id", unique: true, using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",              null: false
    t.string   "password_digest",    null: false
    t.string   "session_token"
    t.string   "name"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
