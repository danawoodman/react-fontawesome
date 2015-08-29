# react-fontawesome

[![Travis CI build status](https://img.shields.io/travis/danawoodman/react-fontawesome.svg)](https://travis-ci.org/danawoodman/react-fontawesome)
[![Dependency Status](https://img.shields.io/david/danawoodman/react-fontawesome.svg)](https://david-dm.org/danawoodman/react-fontawesome)
[![View on npm](https://img.shields.io/npm/dm/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)
[![View on npm](https://img.shields.io/npm/v/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)

> A React component for the font-awesome icon library.

- Simple API that mirrors Font Awesome's classes.
- Supports all Font Awesome modifiers (see [API](#API) below).
- Add your own `className`s, styles and other props (all additional props are passed directly to the component).
- Standard, non-ES6 JavaScript, so should work most places without a build step.
    - Packaged as a CommonJS/npm module.
    - Doesn't use JSX so no transforms needed.
    - Does not require a specific build process/tool other than something that supports npm.


## Install

```
npm install --save react-fontawesome
```


## Usage

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

This component does not include any of the Font Awesome CSS or fonts, so you'll need to make sure to include those on your end somehow, either by adding them to your build process or linking to the CDN versions.


## API

See [the API docs](api.md) for full documentation.


## Contributing

Pull requests welcome! 

Please use the `.editorconfig`, `.eslintrc` configurations in your editor to ensure proper formatting.

Run the test suite with `npm test`, make sure tests are passing and that you write tests for new features.


## License

[MIT](license) &copy; [Dana Woodman][author]


[author]: https://github.com/danawoodman
