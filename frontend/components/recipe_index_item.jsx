var React = require('react'),
    Icon = require('react-fontawesome'),
    ApiUtil = require('../util/api_util'),
    SessionStore = require('../stores/session');

var RecipeIndexItem = React.createClass({
  getInitialState: function () {
    return { saveHover: false, cookedHover: false };
  },

  handleButtonEnter: function (button, e) {
    var state = {};
    state[button + "Hover"] = true;
    this.setState(state);
  },

  handleButtonLeave: function (button, e) {
    var state = {};
    state[button + "Hover"] = false;
    this.setState(state);
  },

  handleClickSave: function (e) {
    e.preventDefault();
    if (!this.props.enforceAuth()) {
      return;
    } else if (this.props.recipeSave) {
      ApiUtil.destroyRecipeSave(this.props.recipeSave);
    } else {
      ApiUtil.createRecipeSave(this.props.recipe.id);
    }
  },

  handleClickCooked: function (e) {
    e.preventDefault();
    if (!this.props.enforceAuth()) {
      return;
    } else if (this.props.cooked) {
      ApiUtil.destroyCook(this.props.cooked);
    } else {
      ApiUtil.createCook(this.props.recipe.id);
    }
  },

  render: function() {
    var saveHover = this.state.saveHover ? " hover" : "";
    var cookedHover = this.state.cookedHover ? " hover" : "";

    var saveIcon = this.props.recipeSave || this.state.saveHover ? "bookmark" : "bookmark-o";
    var saveText = this.props.recipeSave ? "Saved" : "Save";
    var saveButton = (
      <div
        className="index-item-save-button index-item-button"
        onMouseEnter={this.handleButtonEnter.bind(this, "save")}
        onMouseLeave={this.handleButtonLeave.bind(this, "save")}
        onClick={this.handleClickSave}>
        <Icon name={saveIcon} className="index-item-button-icon ui-icon" />
        {saveText}
      </div>
    );

    var checked = this.props.cooked || this.state.cookedHover ? " checked" : "";
    var cookedButtonIcon = <Icon name="check" className={"index-item-button-icon ui-icon" + checked} />;

    var savedIcon;
    if (this.props.recipeSave) {
      savedIcon = <Icon name="bookmark" className="interacted-icon ui-icon" />
    }
    var cookedIcon;
    if (this.props.cooked) {
      cookedIcon = <Icon name="check" className="interacted-icon ui-icon" />
    }

    return (
      <li
        className="recipe-index-item">
        <a href={"#/recipes/" + this.props.recipe.id}>
        <div className="recipe-index-item-thumb">
          <img
            className="thumb-image"
            src={this.props.recipe.photo.thumb_url} />
          <div className={"user-interaction-buttons"}>
            <div className="user-interacted-icons">
              {savedIcon}
              {cookedIcon}
            </div>
            {saveButton}
            <div
              className="index-item-cooked-button index-item-button"
              onMouseEnter={this.handleButtonEnter.bind(this, "cooked")}
              onMouseLeave={this.handleButtonLeave.bind(this, "cooked")}
              onClick={this.handleClickCooked}>
              {cookedButtonIcon}
              Cooked
            </div>
          </div>
        </div>
        <div
          className="recipe-index-item-info">
          <h3
            className="recipe-index-item-title">
            {this.props.recipe.title}
          </h3>
          <h4
            className="recipe-index-item-author">
            By {this.props.recipe.author.name}
          </h4>
          <p
            className="recipe-index-item-cooktime">
            {this.props.recipe.cook_time}
          </p>
        </div>
        </a>
      </li>
    );
  }
});

module.exports = RecipeIndexItem;
