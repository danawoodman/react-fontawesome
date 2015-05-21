# react-fontawesome

A React component for the font-awesome icon library.

- Simple API that mirrors Font Awesome's classes.
- Supports all Font Awesome modifiers:
  - `name` - `'check'`, `'cloud'`, `'person'`, etc... (e.g. any Font Awesome icon class name, minus the `fa-` prefix)
  - `spin` - boolean
  - `size` - `'1x'` | `'2x'` | `'3x'` | `'4x'` | `'5x'`
  - `pulse` - boolean
  - `border` - boolean
  - `fixedWidth` - boolean
  - `inverse` - boolean
  - `flip` - `'horizontal'` | `'vertical'`
  - `rotate` - `'90'` | `'180'` | `'270'`
  - `stack` - `'1x'` | `'2x'`
- Add your own `className`s, styles and other props (all additional props are passed directly to the component).
- Packaged as a CommonJS/npm module.
- Standard, non-ES6 JavaScript, so should work most places.
- Does not require a specific build process/tool other than something that supports npm.


## Usage

```js
var React = require('react');
var FontAwesome = require('react-fontawesome');

var MyComponent = React.createClass({
  render: function () {
    return (
      <FontAwesome
        className="super-crazy-colors"
        name="rocket"
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    );
  }
});
```

This component does not include any of the Font Awesome CSS or fonts, so you'll need to make sure to include those on your end somehow, either by adding them to your build process or linking to the CDN versions.


## Contributing

Pull requests welcome! 

Please use the `.editorconfig`, `.jsfmtrc` and `.jshintrc` configurations in your editor to ensure proper formatting.

Run the test suite with `npm test`, make sure tests are passing and that you write tests for new features.


## Credits

Created by [Dana Woodman](http://danawoodman.com) of [BIG](http://builtbybig.com). Inspired by [react-fa](https://github.com/andreypopp/react-fa).


## License

Licensed under the generous MIT license.
