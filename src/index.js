import React from 'react'
import PropTypes from 'prop-types'

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false] Inverse the icon's color
 * @param {String} [name] Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another. Arguments specify z-index such as '1x' See documentation for example http://fontawesome.io/examples/#stacked
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
class FontAwesome extends React.Component {
  constructor() {
    super()
    this.displayName = 'FontAwesome'
  }

  render() {
    const {
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
      ariaLabel,
      ...props
    } = this.props

    const ariaProps = ariaLabel
      ? { 'aria-label': ariaLabel }
      : { 'aria-hidden': true }
    const classNames = []

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
    return React.createElement(tag, {
      ...props,
      ...ariaProps,
      className: classNames.join(' '),
    })
  }
}

FontAwesome.propTypes = {
  ariaLabel: PropTypes.string,
  border: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  fixedWidth: PropTypes.bool,
  flip: PropTypes.oneOf([ 'horizontal', 'vertical' ]),
  inverse: PropTypes.bool,
  name: PropTypes.string.isRequired,
  pulse: PropTypes.bool,
  rotate: PropTypes.oneOf([ 90, 180, 270 ]),
  size: PropTypes.oneOf([ 'lg', '2x', '3x', '4x', '5x' ]),
  spin: PropTypes.bool,
  stack: PropTypes.oneOf([ '1x', '2x' ]),
  tag: PropTypes.string,
}

export default FontAwesome
