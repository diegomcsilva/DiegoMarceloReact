var React = require('react');

var Competence = React.createClass({
  render: function() {
    return (
      <div className="competence">
        <div className="content">
          <p>HTML5</p>
          <div className="progress">
            <div className="HTML5"></div>
          </div>
        </div>
        <div className="content">
          <p>CSS3</p>
          <div className="progress">
            <div className="CSS3"></div>
          </div>
        </div>
        <div className="content">
          <p>JS</p>
          <div className="progress">
            <div className="JS"></div>
          </div>
        </div>
        <div className="content">
          <p>React</p>
          <div className="progress">
            <div className="React"></div>
          </div>
        </div>
        <div className="all">
          Ionic – React – Metodologias Ágeis - Scrum – Kanban - TypesScript - SASS – Developer tools –
          Gulp.js – AngularJS - HTML - HTML5 - CSS - Bootstrap - jQuery - Linux - Google Analytics -
          Selenium Testing – Git - GitHub - CSS3 - Google Tag Manager - MySQL - Django - Google Doc -
          Testes funcionais - Ms Office - Ms Excel - Ms PowerPoint – JavaScript - English - Inglês - Testes -
          Liderança de equipe - Planejamento estratégico - Estratégia empresarial - Planejamento empresarial -
          Relacionamento interpessoal
        </div>
      </div>
    );
  }
});

module.exports = Competence;
