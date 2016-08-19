/* eslint no-unused-expressions:0 */

import React from 'react'
import ReactDOM from 'react-dom'
import jsdom from 'mocha-jsdom'
import FontAwesome from '../src'

describe('FontAwesome', () => {
  let component
  let classes
  let cssModuleComponent
  let cssModuleClasses

  // Use mocha-jsdom.
  jsdom({ html: '<div id="root"></div>' })

  beforeEach(() => {
    const cssModule = {
      fa: 'fa_1',
      'fa-border': 'fa-border_1',
      'fa-flip-vertical': 'fa-flip-vertical_1',
      'fa-fw': 'fa-fw_1',
      'fa-inverse': 'fa-inverse_1',
      'fa-lg': 'fa-lg_1',
      'fa-rocket': 'fa-rocket_1',
      'fa-pulse': 'fa-pulse_1',
      'fa-rotate-180': 'fa-rotate-180_1',
      'fa-spin': 'fa-spin_1',
      'fa-stack-1x': 'fa-stack-1x_1',
    }

    const props = {
      border: true,
      className: 'my-custom-class',
      fixedWidth: true,
      flip: 'vertical',
      inverse: true,
      name: 'rocket',
      size: 'lg',
      spin: true,
      pulse: true,
      rotate: 180,
      stack: '1x',
    }
    component = ReactDOM.render(<FontAwesome {...props} />, document.getElementById('root'))
    classes = ReactDOM.findDOMNode(component).className.split(' ')

    cssModuleComponent = ReactDOM.render(<FontAwesome {...props} cssModule={cssModule} />,
      document.getElementById('root'))
    cssModuleClasses = ReactDOM.findDOMNode(cssModuleComponent).className.split(' ')
  })

  it('the proper class names get set', () => {
    const expectedClasses = [
      'fa',
      'fa-border',
      'fa-flip-vertical',
      'fa-fw',
      'fa-inverse',
      'fa-lg',
      'fa-rocket',
      'fa-pulse',
      'fa-rotate-180',
      'fa-spin',
      'fa-stack-1x',
      'my-custom-class',
    ]
    expectedClasses.forEach(className => {
      expect(classes.indexOf(className)).to.be.above(-1)
    })
  })

  it('the "name" prop is not rendered in the markup', () => {
    expect(ReactDOM.findDOMNode(component).name).to.be.undefined
  })

  it('correct class names get set using cssModule style', () => {
    const expectedClasses = [
      'fa_1',
      'fa-border_1',
      'fa-flip-vertical_1',
      'fa-fw_1',
      'fa-inverse_1',
      'fa-lg_1',
      'fa-rocket_1',
      'fa-pulse_1',
      'fa-rotate-180_1',
      'fa-spin_1',
      'fa-stack-1x_1',
      'my-custom-class',
    ]
    expectedClasses.forEach(className => {
      expect(cssModuleClasses.indexOf(className)).to.be.above(-1)
    })
  })

  it('the "name" prop is not rendered in the markup using cssModule style', () => {
    expect(ReactDOM.findDOMNode(cssModuleComponent).name).to.be.undefined
  })

})
