import React from 'react'

/**
 * A React component for the font-awesome icon library.
 *
 *
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps (rather than smoothly)
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @module FontAwesome
 * @type {ReactClass}
 */
export default React.createClass({

  displayName: 'FontAwesome',

  propTypes: {
    border: React.PropTypes.bool,
    className: React.PropTypes.string,
    fixedWidth: React.PropTypes.bool,
    flip: React.PropTypes.oneOf([ 'horizontal', 'vertical' ]),
    inverse: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    pulse: React.PropTypes.bool,
    rotate: React.PropTypes.oneOf([ 90, 180, 270 ]),
    size: React.PropTypes.oneOf([ 'lg', '2x', '3x', '4x', '5x' ]),
    spin: React.PropTypes.bool,
    stack: React.PropTypes.oneOf([ '1x', '2x' ]),
  },

  render() {
    let className = 'fa fa-' + this.props.name

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

    return (
      <span
        {...this.props}
        className={className}
      />
    )
  },
})
