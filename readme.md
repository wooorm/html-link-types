# html-link-types

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of link types as specified by HTML.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`htmlLinkTypes`](#htmllinktypes)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package lists values that are allowed in `rel` attributes on `<a>`,
`<area>`, `<form>`, or `<link>` elements.
These values come from [mdn][].

## When should I use this?

Use this package if you specifically need to check which values are allowed in
by the HTML spec in `rel` attributes on `<a>`, `<area>`, `<form>`, and `<link>`
elements.
See [`link-rel`][link-rel] for a list of MicroFormats extensions to `<link>`,
and [`a-rel`][a-rel] for a list of MicroFormats extensions on `<a>` and
`<area>` elements.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install html-link-types
```

In Deno with [`esm.sh`][esmsh]:

```js
import {htmlLinkTypes} from 'https://esm.sh/html-link-types@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {htmlLinkTypes} from 'https://esm.sh/html-link-types@2?bundle'
</script>
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
  // …
  'stylesheet',
  'tag',
  'up' ]
```

## API

This package exports the identifier `htmlLinkTypes`.
There is no default export.

### `htmlLinkTypes`

List of lowercase types (`Array<string>`).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/a-rel`][a-rel]
    — list of link types for `rel` on `a` and `area`
*   [`wooorm/aria-attributes`](https://github.com/wooorm/aria-attributes)
    — list of ARIA attributes
*   [`wooorm/html-dangerous-encodings`](https://github.com/wooorm/html-dangerous-encodings)
    — list of dangerous HTML character encoding labels
*   [`wooorm/html-encodings`](https://github.com/wooorm/html-encodings)
    — list of HTML character encoding labels
*   [`wooorm/link-rel`][link-rel]
    — list of link types for `rel` on `link`
*   [`wooorm/meta-name`](https://github.com/wooorm/meta-name)
    — list of values for `name` on `meta`
*   [`wooorm/web-namespaces`](https://github.com/wooorm/web-namespaces)
    — map of web namespaces

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[mdn]: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types

[link-rel]: https://github.com/wooorm/link-rel

[a-rel]: https://github.com/wooorm/a-rel
