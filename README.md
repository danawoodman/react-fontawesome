# react-fontawesome

A React component for the font-awesome icon library.


## Features

- No external dependencies on build tools.
- Not necessary to support ES6 in your application.
- Packaged for NPM as well as without.
- Remove the `fa-` prefix from all settings.


## Usage

```
var React = require('react');
var FontAwesome = require('react-fontawesome');

var MyComponent = React.createClass({
  render: function () {
    return (
      <FontAwesome
        name="rocket"
        spin
        size="lg"
        className="super-crazy-colors" />
    );
  }
});
```


## Contributing

Pull requests welcome! 

Please use the `.editorconfig`, `.jsfmtrc` and `.jshintrc` configurations in your editor to ensure proper formatting.

Run the test suite with `npm test`, make sure tests are passing and that you write tests for new features.


## Credits

Created by [Dana Woodman](http://danawoodman.com) of [BIG](http://builtbybig.com). Inspired by [react-fa](https://github.com/andreypopp/react-fa).


## License

Licensed under the generous MIT license.
