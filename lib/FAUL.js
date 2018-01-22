'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var faul = function faul(props) {
  var classNames = (0, _utils.formatClassName)(props, 'fa-ul');
  var passthroughProps = (0, _utils.getPassthroughProps)(props);

  return _react2.default.createElement(
    'ul',
    _extends({ className: classNames.join(' ') }, passthroughProps),
    props.children
  );
};

exports.default = faul;
module.exports = exports['default'];