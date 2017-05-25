var React = require('react');
var Nav = require('./Nav')

var Header = React.createClass({
  render: function() {
    return (
      <div className="header" id="header">
        <header>
        <div className="name">
          <h1>Diego Marcelo</h1>
          < Nav / >
        </div>
        </header>
      </div>
    )
  }
})
module.exports = Header;
