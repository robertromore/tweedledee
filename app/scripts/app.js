var React = window.React = require('react'),
    Dispatcher = require('flux').Dispatcher,
    Reflux = require('reflux'),
    Router = require('react-router-component'),
    Location = Router.Location,
    Link = Router.Link,
    Player = require('./ui/player').Views.Player,
    mountNode = document.getElementById("app");

React.renderComponent(<Player />, document.getElementById("player"));

$('div,button').filter(function() {
  var toggle = $(this).data("toggle");
  if (toggle !== undefined)
    return toggle.match(/tooltip/);
}).tooltip();

/*
console.log(Dispatcher);

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <Timer />
      </div>
    );
  }
});


React.renderComponent(<TodoApp />, mountNode);

*/
