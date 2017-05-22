var React = require('react');
var BannerLeft = require('./BannerLeft');
var BannerRight = require('./BannerRight');

var Banner = React.createClass({
  render: function() {
    return (
        <div className="banner">
          <BannerLeft />
          <BannerRight />
        </div>
    );
  }
});

module.exports = Banner;
