var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    App = require('./components/app'),
    Auth = require('./components/auth'),
    FeaturedContent = require('./components/featured_content'),
    RecipesIndex = require('./components/recipes_index.jsx'),
    RecipeDetail = require('./components/recipe_detail'),
    RecipeBox = require('./components/recipe_box'),
    UserShow = require('./components/user_show'),
    AccountEdit = require('./components/account_edit');

var router = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={FeaturedContent} />
      <Route path="recipes/:recipeId" component={RecipeDetail} />
      <Route path="users/:userId" component={UserShow} >
        <Route path="recipe-box" component={RecipeBox} />
        <Route path="my-recipes" component={RecipesIndex} />
      </Route>
      <Route path="tags/:tagId" component={RecipesIndex} />
      <Route path="account/edit" component={AccountEdit} />
    </Route>
  </Router>
);


ReactDOM.render(router, document.getElementById('thymes-cookbook'));
