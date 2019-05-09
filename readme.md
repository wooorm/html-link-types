# html-link-types [![Build Status][build-badge]][build-page]

List of link types as specced in HTML (for example, in `link[rel]`).
From [mdn][].

See [`link-rel`][link-rel] for a list with MicroFormats extensions on `link`
elements, and [`a-rel`][a-rel] for a list with MicroFormats extensions on
`a` and `area` elements.

## Installation

[npm][]:

```bash
npm install html-link-types
```

## Usage

```javascript
var htmlLinkTypes = require('html-link-types')

console.log(htmlLinkTypes)
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
  'manifest',
  'next',
  'nofollow',
  'noopener',
  'noreferrer',
  'pingback',
  'preconnect',
  'prefetch',
  'preload',
  'prerender',
  'prev',
  'search',
  'sidebar',
  'stylesheet',
  'tag',
  'up' ]
```

## API

### `htmlLinkTypes`

`Array.<string>` — List of lower-case types.

## Related

*   [`a-rel`][a-rel]
    — List of link types for `rel` on `a` and `area`
*   [`aria-attributes`](https://github.com/wooorm/aria-attributes)
    — List of ARIA attributes
*   [`html-dangerous-encodings`](https://github.com/wooorm/html-dangerous-encodings)
    — List of dangerous HTML character encoding labels
*   [`html-encodings`](https://github.com/wooorm/html-encodings)
    — List of HTML character encoding labels
*   [`link-rel`][link-rel]
    — List of link types for `rel` on `link`
*   [`meta-name`](https://github.com/wooorm/meta-name)
    — List of values for `name` on `meta`
*   [`web-namespaces`](https://github.com/wooorm/web-namespaces)
    — Map of web namespaces

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/html-link-types.svg

[build-page]: https://travis-ci.org/wooorm/html-link-types

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: http://wooorm.com

[mdn]: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types

[link-rel]: https://github.com/wooorm/link-rel

[a-rel]: https://github.com/wooorm/a-rel
