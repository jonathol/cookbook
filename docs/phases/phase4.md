# Phase 4: Allow Complex Styling in Notes (1 day)

## Rails
### Models
* Comment
* Rating

### Controllers
* Api::CommentsController (create, index, destroy)
* Api::RatingsController (create, update)

### Views
* comments/index.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
* CommentsIndexItem
* CommentsForm
* SearchForm

### Stores
* Comments

### Actions
* ApiActions.receiveComments
* ApiActions.receiveRatings
* CommentActions.createComment
* CommentActions.destroyComment
* RecipeActions.createRating
* RecipeActions.updateRating

### ApiUtil
* ApiUtil.fetchComments
* ApiUtil.fetchRatings
