# html-link-types

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of link types as specced in HTML (for example, in `link[rel]`).
From [mdn][].

See [`link-rel`][link-rel] for a list with MicroFormats extensions on `link`
elements, and [`a-rel`][a-rel] for a list with MicroFormats extensions on `a`
and `area` elements.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install html-link-types
```

## Use

```js
import {htmlLinkTypes} from 'html-link-types'

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

This package exports the following identifiers: `htmlLinkTypes`.
There is no default export.

### `htmlLinkTypes`

`string[]` — List of lowercase types.

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

[build-badge]: https://github.com/wooorm/html-link-types/workflows/main/badge.svg

[build]: https://github.com/wooorm/html-link-types/actions

[downloads-badge]: https://img.shields.io/npm/dm/html-link-types.svg

[downloads]: https://www.npmjs.com/package/html-link-types

[size-badge]: https://img.shields.io/bundlephobia/minzip/html-link-types.svg

[size]: https://bundlephobia.com/result?p=html-link-types

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[mdn]: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types

[link-rel]: https://github.com/wooorm/link-rel

[a-rel]: https://github.com/wooorm/a-rel
