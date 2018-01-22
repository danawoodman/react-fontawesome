import React from 'react'
import { getPassthroughProps, formatClassName } from './utils/';

const faul = (props) => {
  const classNames = formatClassName(props, 'fa-ul')
  const passthroughProps = getPassthroughProps(props)

  return (
    <ul className={classNames.join(' ')} {...passthroughProps}>
      { props.children }
    </ul>
  )
}

export default faul