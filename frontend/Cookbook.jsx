var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    History = ReactRouter.History,
    RouterUtil = require('./util/router_util'),
    App = require('./components/app'),
    Login = require('./components/login'),
    RecipesIndex = require('./components/recipes_index.jsx');

var router = (
  <Router history={History}>
    <Route path="/" component={App}>
      <IndexRoute component={RecipesIndex} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
);

RouterUtil.setRouter(router);

ReactDOM.render(router, document.getElementById('thymes-cookbook'));
