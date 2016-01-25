# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Collection
* CollectionRecipe
* Tag
* Tagging
* RecipeBoxCollection

### Controllers
* Api::CollectionsController (create, destroy, show, update)
* Api::TagsController (show)

### Views
* collections/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* CollectionsDetail

### Stores
* Collections

### Actions
* ApiActions.receiveCollection
* NotebookActions.createCollection
* NotebookActions.editCollection
* NotebookActions.destroyCollection

### ApiUtil
* ApiUtil.fetchCollection
* ApiUtil.createCollection
* ApiUtil.editCollection
* ApiUtil.destroyCollection

## Gems/Libraries
