/* eslint no-unused-expressions:0 */

import React from 'react'
import ReactDOM from 'react-dom'
import jsdom from 'mocha-jsdom'
import { FALI, FAUL } from '../src'

describe('react-fontawesome lists', () => {
  let component
  let classes
  let ariaHidden
  let props

  // Use mocha-jsdom.
  jsdom({ html: '<div id="root"></div>' })

  describe('UL', () => {
    it('should properly render UL', () => {
      const expectedClasses = [
        'my-custom-class',
        'fa-ul'
      ]
      ReactDOM.render(
        <FAUL id="my-ul" className="my-custom-class" />,
        document.getElementById('root')
      )
      classes = ReactDOM.findDOMNode(document.getElementById('my-ul')).className.split(' ')
      expectedClasses.forEach(name => expect(classes).to.include(name))
    })
  })
  describe('LI', () => {
    it('should properly render LIs', () => {
      const props = {
        name: 'caret-right',
        spin: true,
        pulse: false,
        id: 'my-li'
      }
      const expectedClasses = [
        'fa',
        'fa-li',
        'fa-caret-right',
        'fa-spin'
      ]
      ReactDOM.render(
        <FALI {...props}>Hello!</FALI>,
        document.getElementById('root')
      )
      debugger
      classes = ReactDOM.findDOMNode(document.getElementById('my-li')).children[0].className.split(' ')
      expectedClasses.forEach(name => expect(classes).to.include(name))
    })
  })
})
