// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var MyChart = React.createClass({
  getInitialState: function() {
    return {
      data: [0, 1, 1, 2, 3, 5, 8, 13]
    }
  },
  render: function() {
    return (
      <h1>Hello world</h1>
    )
  }
});

ReactDOM.render(
  <MyChart />,
  document.getElementById('example')
);
