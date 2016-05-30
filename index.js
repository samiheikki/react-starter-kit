var React = require('react');
var ReactDOM = require('react-dom');

var MyApp = React.createClass({
  render: function() {
    return (
      <h1>Hello world</h1>
    )
  }
});

ReactDOM.render(
  <MyApp />,
  document.getElementById('example')
);
