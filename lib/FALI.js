'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fali = function fali(props) {
  var classNames = (0, _utils.formatClassName)(props, 'fa-li fa');
  var passthroughProps = (0, _utils.getPassthroughProps)(props);

  return _react2.default.createElement(
    'li',
    passthroughProps,
    _react2.default.createElement('i', { className: classNames.join(' ') }),
    props.children
  );
};

exports.default = fali;
module.exports = exports['default'];