# Changelog

## v1.3.0

- Merged #28: Add ability to change base tag (default is still `<span>`), thanks @lucaskatayama
- Cleaned up tests a bit
- Version control lib directory since `prepublish` script is gone.

## v1.2.0

- Add CSS module support (#21, thanks @callumsmits!)
- Simplify CSS tag creation code
- Cleanup test suite

## v1.1.0

- Remove `prepublish` step so builds work on Windows

## v1.0.0

We are production ready! 😬🤘🎉

- Upgrade development node version
- [Tests] Use the modern ReactDOM.render+findDOMNode APIs for React 15 (#10, thanks @ide!)
- Filter which props are passed into the underlying span (#8, thanks @ide!)
- Upgrade ESLint to v2 (#7, thanks @ide!)
- Upgrade to Babel 6 (#6, thanks @ide!)

## v0.3.0

- Refactor to use new application structure
- Use eslint
- src folder for ES6/7 code ran through babel to lib
- More helpful scripts
- Simpler test
- Less dependencies
- Remove webpack
- Add api docs
- Updated readme

## v0.2.5

- Allow React to be 0.12 or greater, actually fixing #2.

## v0.2.4

- Relax React dependency which closes #2.

## v0.2.3

- Revert back to using `lg` instead of `1x` for size.

## v0.2.2

- Update README
  - Add API reference.
  - General cleaup.

## v0.2.1

- Properly assign props to component.

## v0.2.0

- Reverting back to non-ES6 code to make more consumable.

## v0.1.0

- Move over to ES6 imports/emports
- Use JSX instead of `React.createElement`
