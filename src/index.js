import React from 'react'
import PropTypes from 'prop-types'
import srOnlyStyle from './screen-reader-styles'
import { formatClassName, getPassthroughProps } from './utils/';
import FAUL from './FAUL';
import FALI from './FALI';

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
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
    const classNames = formatClassName(this.props, 'fa')
    const {
      tag = 'span',
      ariaLabel,
      ...leftoverProps
    } = getPassthroughProps(this.props)


    return React.createElement(
      tag,
      { ...leftoverProps, 'aria-hidden': true, className: classNames.join(' ') },
      ariaLabel
        ? React.createElement('span', { style: srOnlyStyle }, ariaLabel)
        : null
    )
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

export { FAUL, FALI }