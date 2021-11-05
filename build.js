import fs from 'node:fs'
import https from 'node:https'
import {bail} from 'bail'
import concat from 'concat-stream'
import {unified} from 'unified'
import parse from 'rehype-parse'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {htmlLinkTypes} from './index.js'

https.get(
  'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types',
  onconnection
)

function onconnection(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)
  var nodes = selectAll('.standard-table td:first-child code', tree)
  var index = -1
  var data

  while (++index < nodes.length) {
    data = toString(nodes[index])

    if (data && !htmlLinkTypes.includes(data)) {
      htmlLinkTypes.push(data)
    }
  }

  fs.writeFile(
    'index.js',
    'export var htmlLinkTypes = ' +
      JSON.stringify(htmlLinkTypes.sort(), null, 2) +
      '\n',
    bail
  )
}
