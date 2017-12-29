# react-fontawesome

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis CI build status](https://img.shields.io/travis/danawoodman/react-fontawesome.svg)](https://travis-ci.org/danawoodman/react-fontawesome)
[![Dependency Status](https://img.shields.io/david/danawoodman/react-fontawesome.svg)](https://david-dm.org/danawoodman/react-fontawesome)
[![View on npm](https://img.shields.io/npm/dm/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)
[![View on npm](https://img.shields.io/npm/v/react-fontawesome.svg)](https://www.npmjs.com/package/react-fontawesome)

> A React component for the font-awesome icon library.

## Install

```bash
npm install --save react-fontawesome
```

_Note: This component does not include any of the Font Awesome CSS or fonts, so you'll need to make sure to include those on your end somehow, either by adding them to your build process or linking to [CDN versions](https://www.bootstrapcdn.com/fontawesome/)._

### Using CDN version

The fastest way to get started is to import FontAwesome with a link tag in your page's `<head>`:

```html
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
```

You can change the version number to use whatever version of FontAwesome you'd like.

### Using with Webpack

If you're using WebPack, you will need to install FontAwesome, import the FontAwesome Sass/Less, and configure the font path. Please see this [blog post](https://medium.com/@chanonroy/webpack-2-and-font-awesome-icon-importing-59df3364f35c) on how to get Webpack and FontAwesome working together.

## Usage

```js
var React = require('react')
var FA = require('react-fontawesome')

React.render(<FA name="rocket" />, document.body)
```

## Features

* No dependencies (other than React)
* Simple API that mirrors Font Awesome's class names.
* Supports all Font Awesome modifiers (see [API](#API) below).
* Make use of Css Modules
* Add your own `className`s, styles and other props (all additional props are passed directly to the component).

## Examples

**Regular usage**

```js
var React = require('react')
var FontAwesome = require('react-fontawesome')

var MyComponent = React.createClass({
  render: function() {
    return (
      <FontAwesome
        className="super-crazy-colors"
        name="rocket"
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    )
  },
})
```

**With the use of CSS Modules**

```js
import React from 'react'
import FontAwesome from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'

var MyComponent = React.createClass({
  render: function() {
    return (
      <FontAwesome
        className="super-crazy-colors"
        name="rocket"
        cssModule={faStyles}
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    )
  },
})
```

The above will create output like this:

```
<span class="font-awesome__fa___2otTb font-awesome__fa-rocket___lfSov font-awesome__super-crazy-colors___3k583"></span>
```

## API

See [the API docs](api.md) for full documentation.

## Contributing

Pull requests welcome!

Run the test suite with `npm test` and format your code with `npm run format`. Make sure tests are passing and that you write tests for new features and document changes to the API with updates to the JSDocs.

Before you submit your pull request, run `npm run dist` to build the project and commit the changes.

## License

[MIT](license) &copy; [Dana Woodman][author]

[author]: https://github.com/danawoodman
