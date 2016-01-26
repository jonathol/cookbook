# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
name            | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## recipes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
ingredients | text      |
preparation | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## ingredients
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
quantity    | float     |
recipe_id   | integer   | not null, foreign_key, indexed

## ratings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [recipe_id]
recipe_id   | integer   | not null, foreign key (references recipes), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
recipe_id   | integer   | not null, foreign key (references recipes), indexed
parent_id   | integer   | foreign key (references comments), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
recipe_id   | integer   | not null, foreign key (references recipes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## collection_recipes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
collection_id | integer   | not null, foreign key (references collections), indexed, unique [recipe_id]
recipe_id     | integer   | not null, foreign key (references recipes), indexed

## recipe_box_collections
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references user), indexed, unique [collection_id]
