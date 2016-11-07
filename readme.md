# html-link-types [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

List of link types as used in HTML (for example, in `link[rel]`).
From [mdn][].

## Installation

[npm][]:

```bash
npm install html-link-types
```

## Usage

```javascript
var htmlLinkTypes = require('html-link-types');
```

Yields:

```js
[ 'alternate',
  'archives',
  'author',
  'bookmark',
  'dns-prefetch',
  'external',
  'first',
  'help',
  'icon',
  'index',
  'last',
  'license',
  'next',
  'nofollow',
  'noreferrer',
  'pingback',
  'preconnect',
  'prefetch',
  'preload',
  'prerender',
  'prev',
  'search',
  'stylesheet',
  'sidebar',
  'tag',
  'up' ]
```

## API

### `htmlLinkTypes`

`Array.<string>` — List of lower-case types.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/html-link-types.svg

[build-page]: https://travis-ci.org/wooorm/html-link-types

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/html-link-types.svg

[coverage-page]: https://codecov.io/github/wooorm/html-link-types?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[mdn]: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
