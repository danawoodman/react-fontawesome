const React = require('react')
const ReactDOM = require('react-dom')
const FA = require('react-fontawesome')
const StackedIcons = FA.StackedIcons

// Spinning
ReactDOM.render(
  <FA name='twitter' spin />,
  document.getElementById('spin')
)

// Stack
ReactDOM.render(
  <StackedIcons size='lg'>
    <FA name='square-o' stack='2x' />
    <FA name='twitter' stack='1x' />
  </StackedIcons>,
  document.getElementById('stacked')
)
