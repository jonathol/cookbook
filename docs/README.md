# New York Thyme's Cookbook

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.thymes-cookbook.com

## Minimum Viable Product

Cookbook is a web application inspired by New York Times Cooking built using Ruby on Rails and React.js. Cookbook allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Read, bookmark, rate, and mark 'cooked' on recipes
- [ ] Create recipe collections
- [ ] Make public and private comments on recipes
- [ ] Upvote comments they like
- [ ] Search for recipes by name, tag, or author
- [ ] Share recipes on social media
- [ ] Watch videos for recipes (when available)

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Recipe Model and JSON API (1.5 days)

I plan on creating the user and recipe models in phase 1. I will set up user sign up and authentication pages and a sessions controller to track current users. I will begin working on the recipes index and the JSON API to retrieve recipe information from the database.

[Details][phase-one]

### Phase 2: API Utils, Recipes Store, and first components (2 days)

In phase 2, I will begin setting up the React/Flux architecture. I will set up a Recipes Store that is updated through the Recipe API. Once recipes can be retrieved, I will start implementing the Recipes Index, IndexItems, and DetailViews. These will use recipes stored in the database, and I will begin styling the pages using CSS.

[Details][phase-two]

### Phase 3: Recipe Box, Collections, and Tags/Taggings (1.5 days)

With phase 3, I will begin adding extra features that revolve around the recipes. I will add `collection` and `tag` models. Since these will be dependent on recipes, I will add collection_recipes and taggings join tables. I will also add a recipe_box_collections join table for users' recipe boxes (which are essentially special collections). I add a Collections Store CollectionsDetail React component to go with these.

[Details][phase-three]

### Phase 4: User Comments and Ratings (2.5 days)

I will add a comment model in phase 4. I will create A comments store Flux component and a Comments Index, and Comments Index Item component for each Recipe Detail View, along with a Comments Form. I will also add a rating model that will be part of every recipe. I will add the search form component at this stage to search for recipes based on on names and taggings.

[Details][phase-four]

### Phase 5: Finish Styling and Seeding (1.5 days)

In phase 5 I will make add the final touches on the styling and try to put the final touches on things. I will also seed the database to fill out all the tables with dummy information.

### Bonus Features (TBD)
- [ ] Admin Recipe creating, updating
- [ ] Add recipes from other websites to recipe box
- [ ] Add instructional videos

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
