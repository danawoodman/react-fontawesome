const React = require('react')
const ReactDOM = require('react-dom')
const FA = require('react-fontawesome')

// Spinning
ReactDOM.render(
  <FA name='twitter' spin />,
  document.getElementById('spin')
)

// Stack
ReactDOM.render(
  <span className='fa-stack fa-lg'>
    <FA name='square-o' stack='2x' />
    <FA name='twitter' stack='1x' />
  </span>,
  document.getElementById('stacked')
)
