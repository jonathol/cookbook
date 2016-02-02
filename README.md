# New York Thyme's Cookbook

New York Thyme's Cookbook is a clone of [New York Times Cooking](http://www.cooking.nytimes.com) created by William McMeans. It features recipes that users can save to their recipe box, rate, comment on, and more. Take a look at it live at [http://www.thymes-cookbook.com](http://www.thymes-cookbook.com) — you can log in on an already registered account with one click using the demo button.

[Live Here][live]

[live]: http://www.thymes-cookbook.com

## App

My website begins in my React Router, which lives in my [Cookbook.jsx file](frontend/Cookbook.jsx). All my components live inside my [App](frontend/components/app.jsx) component. Aside from rendering children, the App keeps track of auth state (whether the user is trying to authenticate or not). It also passes down a callback to its children to set auth state to true if a user is trying to do something that requires them to be logged in.

The App gets the session information through the [Api::SessionsController](app/controllers/api/sessions_controller), which it sends a request to after mounting. The [SessionStore](frontend/stores/session.js) holds information about the user on the frontend, though security ensures that no requests send up anything involving delicate user params (e.g. no creating comments for another user).

## Features

* Authentication
••* Session is authenticated in the backend. All queries return data that corresponds to the proper user.
••* User can log in from any page in the app. Clicking on a link to save a recipe, access recipe box, etc. prompt the user for log in (as on the original app).
* Save recipes
* Mark recipes as cooked
* Comment on recipes
* Find recipes by tag
* Look at recipe boxes of other users

## Languages, Frameworks, Libraries, Etc.

* Ruby on Rails (backend)
* JavaScript
* React / Flux
* jQuery
