import fs from 'node:fs/promises'
import fetch from 'node-fetch'
import {fromHtml} from 'hast-util-from-html'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {htmlLinkTypes} from './index.js'

const response = await fetch(
  'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types'
)
const text = await response.text()
const tree = fromHtml(text)

const nodes = selectAll('.standard-table td:first-child code', tree)
let index = -1

while (++index < nodes.length) {
  const data = toString(nodes[index])

  if (data && !htmlLinkTypes.includes(data)) {
    htmlLinkTypes.push(data)
  }
}

await fs.writeFile(
  'index.js',
  [
    '/**',
    ' * List of link types as specified by HTML.',
    ' *',
    ' * @type {Array<string>}',
    ' */',
    'export const htmlLinkTypes = ' +
      JSON.stringify(htmlLinkTypes.sort(), null, 2),
    ''
  ].join('\n')
)
