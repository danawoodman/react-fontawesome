var React = require('react/addons');
var jsdom = require('mocha-jsdom');
var TestUtils = React.addons.TestUtils;
var FontAwesome = require('../index');
var FontAwesomeFactory = React.createFactory(FontAwesome);

describe('FontAwesome', function () {
  var classes;

  // Use mocha-jsdom.
  jsdom();

  beforeEach(function () {
    var component = FontAwesomeFactory({
      name: 'rocket',
      size: 'lg',
      spin: true,
      pulse: true,
      border: true,
      fixedWidth: true,
      inverse: true,
      stack: '1x',
      flip: 'vertical',
      rotate: '180',
      className: 'my-custom-class',
    });
    var targetElement = document.getElementsByTagName('body')[0];
    var spanComponent = TestUtils.findRenderedDOMComponentWithTag(
      React.render(component, targetElement),
      'span'
    );
    classes = spanComponent.getDOMNode().className.split(' ');
  });

  it('the proper class names get set', function () {
    var expectedClasses = [
      'fa',
      'fa-lg',
      'fa-rocket',
      'fa-spin',
      'fa-pulse',
      'fa-border',
      'fa-fw',
      'fa-inverse',
      'fa-flip-vertical',
      'fa-rotate-180',
      'fa-stack-1x',
      'my-custom-class',
    ];
    expectedClasses.forEach(function (className) {
      classes.indexOf(className).should.be.above(-1);
    });
  });
});
