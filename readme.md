# react-fontawesome

[![Travis CI build status](https://img.shields.io/travis/danawoodman/react-fontawesome.svg)](https://travis-ci.org/danawoodman/react-fontawesome)
[![Dependency Status](https://img.shields.io/david/danawoodman/react-fontawesome.svg)](https://david-dm.org/danawoodman/react-fontawesome)
[![View on npm](https://img.shields.io/npm/dm/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)
[![View on npm](https://img.shields.io/npm/v/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)

> A React component for the font-awesome icon library.


## Install

```
npm install --save react-fontawesome
```


## Usage

```js
var React = require('react');
var FontAwesome = require('react-fontawesome');

React.render(<FontAwesome name='rocket' />, document.body);
```


## Features

- No dependencies (other than React)
- Simple API that mirrors Font Awesome's class names.
- Supports all Font Awesome modifiers (see [API](#API) below).
- Add your own `className`s, styles and other props (all additional props are passed directly to the component).

*Note: This component does not include any of the Font Awesome CSS or fonts, so you'll need to make sure to include those on your end somehow, either by adding them to your build process or linking to CDN versions.*


## Examples

```js
var React = require('react');
var FontAwesome = require('react-fontawesome');

var MyComponent = React.createClass({
  render: function () {
    return (
      <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    );
  }
});
```


## API

See [the API docs](api.md) for full documentation.


## Contributing

Pull requests welcome! 

Please use the `.editorconfig`, `.eslintrc` configurations in your editor to ensure proper formatting.

Run the test suite with `npm test` and linting with `npm run lint`. Make sure tests are passing and that you write tests for new features and document changes to the API with updates to the JSDocs.


## License

[MIT](license) &copy; [Dana Woodman][author]


[author]: https://github.com/danawoodman
