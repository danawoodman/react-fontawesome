import React from 'react'

/**
 * A React component for the font-awesome icon library.
 *
 *
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
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
    tag: React.PropTypes.string,
    border: React.PropTypes.bool,
    className: React.PropTypes.string,
    cssModule: React.PropTypes.object,
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
    let {
      border,
      cssModule,
      className,
      fixedWidth,
      flip,
      inverse,
      name,
      pulse,
      rotate,
      size,
      spin,
      stack,
      tag = 'span',
      ...props,
    } = this.props

    let classNames = []

    if (cssModule) {
      classNames.push(cssModule['fa'])
      classNames.push(cssModule['fa-' + name])
      size && classNames.push(cssModule['fa-' + size])
      spin && classNames.push(cssModule['fa-spin'])
      pulse && classNames.push(cssModule['fa-pulse'])
      border && classNames.push(cssModule['fa-border'])
      fixedWidth && classNames.push(cssModule['fa-fw'])
      inverse && classNames.push(cssModule['fa-inverse'])
      flip && classNames.push(cssModule['fa-flip-' + flip])
      rotate && classNames.push(cssModule['fa-rotate-' + rotate])
      stack && classNames.push(cssModule['fa-stack-' + stack])
    } else {
      classNames.push('fa')
      classNames.push('fa-' + name)
      size && classNames.push('fa-' + size)
      spin && classNames.push('fa-spin')
      pulse && classNames.push('fa-pulse')
      border && classNames.push('fa-border')
      fixedWidth && classNames.push('fa-fw')
      inverse && classNames.push('fa-inverse')
      flip && classNames.push('fa-flip-' + flip)
      rotate && classNames.push('fa-rotate-' + rotate)
      stack && classNames.push('fa-stack-' + stack)
    }

    // Add any custom class names at the end.
    className && classNames.push(className)
    return React.createElement(tag, { ...props, className: classNames.join(' ') })
  },
})
