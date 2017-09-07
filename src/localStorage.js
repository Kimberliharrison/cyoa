const React = require('react');
const LocalStorageMixin = require('react-localstorage');

const TestComponent = module.exports = React.createClass({
  displayName: 'TestComponent',
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {counter: 0};
  },

  onClick: function() {
    this.setState({counter: this.state.counter + 1});
  },

  render: function() {
    return (
      <span onClick={this.onClick}>{this.state.counter}</span>
    );
  }
});
