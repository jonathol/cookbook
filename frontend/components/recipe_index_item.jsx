var React = require('react'),
    Icon = require('react-fontawesome'),
    ApiUtil = require('../util/api_util');

var RecipeIndexItem = React.createClass({
  getInitialState: function () {
    return { saveHover: false, cookedHover: false };
  },

  componentWillReceiveProps: function (newProps) {

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

  handleSave: function (e) {
    e.preventDefault();
    ApiUtil.createRecipeSave(this.props.recipe.id);
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
        onClick={this.handleSave}>
        <Icon name={saveIcon} className="index-item-button-icon" />
        {saveText}
      </div>
    );

    return (
      <li
        className="recipe-index-item">
        <a href={"#/recipes/" + this.props.recipe.id}>
        <div className="recipe-index-item-thumb">
          <img
            className="thumb-image"
            src={this.props.recipe.photo.thumb_url} />
          <div className={"user-interaction-buttons"}>
            {saveButton}
            <div
              className="index-item-cooked-button index-item-button"
              onMouseEnter={this.handleButtonEnter.bind(this, "cooked")}
              onMouseLeave={this.handleButtonLeave.bind(this, "cooked")}>
              <Icon name="check" className="index-item-button-icon" />
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
