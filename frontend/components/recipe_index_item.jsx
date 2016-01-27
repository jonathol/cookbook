var React = require('react');

var RecipeIndexItem = React.createClass({
  render: function() {
    return (
      <li
        className="recipe-index-item">
        <div className="recipe-index-item-image"></div>
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
      </li>
    );
  }
});

module.exports = RecipeIndexItem;
