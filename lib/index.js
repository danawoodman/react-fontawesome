'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * A React component for the font-awesome icon library.
 *
 *
 * @param {?Boolean} border Whether or not to show a border radius
 * @param {?String} className An extra set of CSS classes to add to the component
 * @param {?Boolean} fixedWidth Make buttons fixed width
 * @param {?String} flip Flip the icon's orientation.
 * @param {?Boolean} inverse Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {?Boolean} pulse Rotate icon with 8 steps (rather than smoothly)
 * @param {?Number} rotate The degress to rotate the icon by
 * @param {?String} size The icon scaling size
 * @param {?Boolean} spin Spin the icon
 * @param {?String} stack Stack an icon on top of another
 * @module FontAwesome
 * @class
 */
exports['default'] = _react2['default'].createClass({

  displayName: 'FontAwesome',

  propTypes: {
    border: _react2['default'].PropTypes.bool,
    className: _react2['default'].PropTypes.string,
    fixedWidth: _react2['default'].PropTypes.bool,
    flip: _react2['default'].PropTypes.oneOf(['horizontal', 'vertical']),
    inverse: _react2['default'].PropTypes.bool,
    name: _react2['default'].PropTypes.string.isRequired,
    pulse: _react2['default'].PropTypes.bool,
    rotate: _react2['default'].PropTypes.oneOf([90, 180, 270]),
    size: _react2['default'].PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    spin: _react2['default'].PropTypes.bool,
    stack: _react2['default'].PropTypes.oneOf(['1x', '2x'])
  },

  render: function render() {
    var className = 'fa fa-' + this.props.name;

    if (this.props.size) {
      className += ' fa-' + this.props.size;
    }

    if (this.props.spin) {
      className += ' fa-spin';
    }

    if (this.props.pulse) {
      className += ' fa-pulse';
    }

    if (this.props.border) {
      className += ' fa-border';
    }

    if (this.props.fixedWidth) {
      className += ' fa-fw';
    }

    if (this.props.inverse) {
      className += ' fa-inverse';
    }

    if (this.props.flip) {
      className += ' fa-flip-' + this.props.flip;
    }

    if (this.props.rotate) {
      className += ' fa-rotate-' + this.props.rotate;
    }

    if (this.props.stack) {
      className += ' fa-stack-' + this.props.stack;
    }

    if (this.props.className) {
      className += ' ' + this.props.className;
    }

    return _react2['default'].createElement('span', _extends({}, this.props, {
      className: className
    }));
  }
});
module.exports = exports['default'];
