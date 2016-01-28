var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    App = require('./components/app'),
    Auth = require('./components/auth'),
    RecipesIndex = require('./components/recipes_index.jsx');

var router = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={RecipesIndex} />
      <Route path="login" component={Auth} />
    </Route>
  </Router>
);


ReactDOM.render(router, document.getElementById('thymes-cookbook'));
