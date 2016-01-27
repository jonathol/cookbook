var _router;

var RouterUtil = {
  setRouter: function (router) {
    _router = router;
  },

  getRouter: function () {
    return _router;
  },

  redirectToIndex: function () {
    debugger
    browserHistory.push('/');
  }
  // redirectToIndex: function () {
  //   debugger
  //   _router.props.history.push(null, '/');
  // }
};

module.exports = RouterUtil;
