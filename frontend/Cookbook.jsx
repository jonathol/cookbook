var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    App = require('./components/app');

var router = (
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
);
ReactDOM.render(router, document.getElementById('thymes-cookbook'));
