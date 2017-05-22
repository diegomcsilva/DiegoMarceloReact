var React = require('react');
var Header = require('./Header');
var Banner = require('./Banner');
var About = require('./About');
var Competence = require('./Competence');

var Main = React.createClass({

    render: function() {
        return (
            <div className="main">
                <Header />
                <Banner / >
                <About />
                <Competence />
            </div>
        );
    }
});

module.exports = Main;
