var _ = require('lodash')
var React = require('react')

module.exports = React.createClass({

  propTypes: {
    border: React.PropTypes.bool,
    fixedWidth: React.PropTypes.bool,
    flip: React.PropTypes.oneOf(['horizontal', 'vertical']),
    inverse: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    pulse: React.PropTypes.bool,
    rotate: React.PropTypes.oneOf(['90', '180', '270']),
    size: React.PropTypes.oneOf(['1x', '2x', '3x', '4x', '5x']),
    spin: React.PropTypes.bool,
    stack: React.PropTypes.oneOf(['1x', '2x']),
  },

  render: function () {
    var className = 'fa fa-' + this.props.name

    if (this.props.size) {
      className += ' fa-' + this.props.size
    }

    if (this.props.spin) {
      className += ' fa-spin'
    }

    if (this.props.pulse) {
      className += ' fa-pulse'
    }

    if (this.props.border) {
      className += ' fa-border'
    }

    if (this.props.fixedWidth) {
      className += ' fa-fw'
    }

    if (this.props.inverse) {
      className += ' fa-inverse'
    }

    if (this.props.flip) {
      className += ' fa-flip-' + this.props.flip
    }

    if (this.props.rotate) {
      className += ' fa-rotate-' + this.props.rotate
    }

    if (this.props.stack) {
      className += ' fa-stack-' + this.props.stack
    }

    if (this.props.className) {
      className += ' ' + this.props.className
    }

    return React.createElement('span', _.assign({}, this.props, { className: className }))
  }
})
