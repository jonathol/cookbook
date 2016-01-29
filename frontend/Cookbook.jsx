var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    App = require('./components/app'),
    RecipesIndex = require('./components/recipes_index.jsx'),
    RecipeDetail = require('./components/recipe_detail');

var router = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={RecipesIndex} />
      <Route path="recipes/:recipeId" component={RecipeDetail} />
    </Route>
  </Router>
);


ReactDOM.render(router, document.getElementById('thymes-cookbook'));
