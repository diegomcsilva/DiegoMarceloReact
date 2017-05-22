var React = require('react');
var Header = require('./Header');
var Banner = require('./Banner');

var Main = React.createClass({

    render: function() {
        return (
            <div className="main">
                <Header />
                <Banner / >
            </div>
        );
    }
});

module.exports = Main;
