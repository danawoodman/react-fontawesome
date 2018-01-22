import { formatClassName, getPassthroughProps } from '../src/utils/';

describe('react-fontawesome utils', () => {
  let classes
  let props
  let passthroughProps

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
      thisIsNotThePropYouAreLookingFor: true
    }

    classes = formatClassName(props, 'fa')
    passthroughProps = getPassthroughProps(props)
  })

  describe('formatClassName', () => {
    it('should return the proper class names', () => {
      let expectedClasses = [
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
  })
  describe('getPassthroughProps', () => {
    it('should return the correct props', () => {
      let expectedLeftoverProps = [
        'thisIsNotThePropYouAreLookingFor'
      ]
      expectedLeftoverProps.forEach(name => expect(passthroughProps[name]).to.be.equal(true))
    })
  })
})