require('./bower_components/vaadin-charts/react');
var React = require('react');
var ReactDOM = require('react-dom');

var MyApp = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      inputNumber: ''
    };
  },
  pushNumber: function() {
    if (!isNaN(parseInt(this.state.inputNumber))) {
      var newData = this.state.data;
      newData.push(parseInt(this.state.inputNumber));
      this.setState({data: newData});
      this.setState({inputNumber: ''});
    }
  },
  handleinputNumberChange: function(event) {
    this.setState({inputNumber: event.target.value});
  },
  render: function() {
    return (
      <div>
      <input type="number" placeholder="number" value={this.state.inputNumber} onChange={this.handleinputNumberChange}/><button onClick={this.pushNumber}>Push that number</button>
        <vaadin-line-chart>
          <chart-title>Fibonacci</chart-title>
          <x-axis>
            <categories>January, February, March, April, May, June, July</categories>
          </x-axis>
          <data-series>
            <data>65, 59, 80, 81, 56, 55, 40</data>
          </data-series>
          <data-series>
            <data>28, 48, 40, 19, 86, 27, 90</data>
          </data-series>
          <data-series>
            <data>{this.state.data.map(JSON.stringify).join(',')}</data>
          </data-series>
        </vaadin-line-chart>
      </div>
    )
  }
});

ReactDOM.render(
  <MyApp />,
  document.getElementById('example')
);
