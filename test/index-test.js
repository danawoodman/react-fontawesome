/* eslint no-unused-expressions:0 */

import React from 'react'
import ReactDOM from 'react-dom'
import jsdom from 'mocha-jsdom'
import FontAwesome, { StackedIcons } from '../src'
import srOnlyStyle from '../src/screen-reader-styles'

describe('react-fontawesome', () => {
  let component
  let classes
  let ariaHidden
  let props

  // Use mocha-jsdom.
  jsdom({ html: '<div id="root"></div>' })

  beforeEach(() => {
    props = {
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
    ariaHidden = ReactDOM.findDOMNode(component).getAttribute('aria-hidden')
  })

  it('the proper class names should get set', () => {
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
    expectedClasses.forEach(name => expect(classes).to.include(name))
  })

  it('aria-hidden get set', () => {
    expect(ariaHidden).to.equal('true')
  })

  it('the "name" prop is not rendered in the markup', () => {
    expect(ReactDOM.findDOMNode(component).name).to.be.undefined
  })

  context('StackedIcons', () => {
    it('should set classNames properly', () => {
      component = ReactDOM.render(
        <StackedIcons size="lg" className="my-custom-class">
          <FontAwesome name="circle" stack="2x" />
          <FontAwesome name="flag" stack="1x" inverse />
        </StackedIcons>,
        document.getElementById('root'),
      )

      const domNode = ReactDOM.findDOMNode(component)
      expect(domNode.tagName).to.be.equal('SPAN')

      const expectedClasses = ['fa-stack', 'fa-lg', 'my-custom-class']
      classes = domNode.className.split(' ')
      expectedClasses.forEach(c => expect(classes).to.include(c))

      expect(domNode.childNodes.length).to.equal(2)
      expect(domNode.childNodes[0].className.split(' ')).to.include('fa-stack-2x')
      expect(domNode.childNodes[1].className.split(' ')).to.include('fa-stack-1x')
    })
  })

  context('CSS module support', () => {
    let cssModuleComponent
    let cssModuleClasses

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

      cssModuleComponent = ReactDOM.render(
        <FontAwesome {...props} cssModule={cssModule} />,
        document.getElementById('root'),
      )
      cssModuleClasses = ReactDOM.findDOMNode(cssModuleComponent).className.split(' ')
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
        expect(cssModuleClasses).to.include(className)
      })
    })

    it('the "name" and "cssModule" prop is not rendered in the markup using cssModule style', () => {
      expect(ReactDOM.findDOMNode(cssModuleComponent).name).to.be.undefined
      expect(ReactDOM.findDOMNode(cssModuleComponent).cssModule).to.be.undefined
    })

    context('StackedIcons', () => {
      it('should set cssModule styles', () => {
        const cssModule1 = {
          'fa-stack': 'fa-stack_1',
          'fa-lg': 'fa-lg_1',
        }

        cssModuleComponent = ReactDOM.render(
          <StackedIcons size="lg" cssModule={cssModule1}>
            <FontAwesome name="circle" stack="2x" />
            <FontAwesome name="flag" stack="1x" inverse />
          </StackedIcons>,
          document.getElementById('root'),
        )
        cssModuleClasses = ReactDOM.findDOMNode(cssModuleComponent).className.split(' ')

        const expectedClasses = ['fa-stack_1', 'fa-lg_1']
        expectedClasses.forEach(c => expect(cssModuleClasses).to.include(c))
      })
    })
  })
  context('Using tag prop', () => {
    it('should render span tag if tag prop is not specified', () => {
      props = { name: 'rocket' }
      component = ReactDOM.render(<FontAwesome {...props} />, document.getElementById('root'))
      expect(ReactDOM.findDOMNode(component).tagName).to.be.equal('SPAN')
    })

    it('should render tag specified in tag prop', () => {
      props = { tag: 'i', name: 'rocket' }
      component = ReactDOM.render(
        <div>
          <FontAwesome {...props} />
        </div>,
        document.getElementById('root'),
      )
      expect(ReactDOM.findDOMNode(component).children[0].tagName).to.be.equal('I')
    })
  })
  context('Using ariaLabel prop', () => {
    it('should not render sub span tag if ariaLabel prop is not specified', () => {
      component = ReactDOM.render(<FontAwesome {...props} />, document.getElementById('root'))
      expect(ReactDOM.findDOMNode(component).children.length).to.be.equal(0)
    })

    it('should render sub span tag if ariaLabel prop is specified', () => {
      props = { ariaLabel: 'foobar', name: 'rocket' }
      component = ReactDOM.render(<FontAwesome {...props} />, document.getElementById('root'))

      let children = ReactDOM.findDOMNode(component).children
      expect(children.length).to.be.equal(1)
      expect(children[0].tagName).to.be.equal('SPAN')
      expect(children[0].textContent).to.be.equal('foobar')
      Object.keys(srOnlyStyle).forEach(key => expect(children[0].style[key]).to.be.equal(srOnlyStyle[key]))
    })
  })
})
