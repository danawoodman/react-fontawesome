import React from 'react'
import { getPassthroughProps, formatClassName } from './utils/';

const fali = (props) => {
  const classNames = formatClassName(props, 'fa-li fa')
  const passthroughProps = getPassthroughProps(props)

  return (
    <li {...passthroughProps}><i className={classNames.join(' ')}></i>{ props.children }</li>
  )
}

export default fali