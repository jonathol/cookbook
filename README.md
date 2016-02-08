# New York Thyme's Cookbook

New York Thyme's Cookbook is a clone of [New York Times Cooking](http://www.cooking.nytimes.com) created by William McMeans. It features recipes that users can save to their recipe box, rate, comment on, and more. Take a look at it live at [http://www.thymes-cookbook.com](http://www.thymes-cookbook.com) — you can log in on an already registered account with one click using the demo button.

[Live Here][live]

[live]: http://www.thymes-cookbook.com

## Features

* Authentication
  * Session is authenticated in the backend. All queries return data that corresponds to the proper user.
  * User can log in from any page in the app. Clicking on a link to save a recipe, access recipe box, etc. prompt the user for log in (as on the original app).
* Save recipes
* Mark recipes as cooked
* Comment on recipes
* Find recipes by tag
* Look at recipe boxes of other users

## Code Guide

If you'd like to take a closer look at the code behind the Cookbook App, the best folders to look in are:

* [Cookbook.jsx](./frontend/Cookbook.jsx)
* [React components](./frontend/components)
  * [App](./frontend/components/app.jsx)
* [Rails controllers](./app/controllers/api)
* [Flux Stores](./frontend/stores)
* [Api Util](./frontend/util/api_util.js)
* [DB Schema](./db/schema.rb)
* [Rails Routes](./config/routes.rb)

## Languages, Frameworks, Libraries, Etc.

* Ruby on Rails
* PostgreSQL
* React
* Flux
* jQuery
* Gems
  * Paperclip
  * pg_search
  * jwt
  * Jbuilder
  * BCrypt
