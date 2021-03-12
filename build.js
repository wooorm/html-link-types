'use strict'

var fs = require('fs')
var https = require('https')
var bail = require('bail')
var concat = require('concat-stream')
var unified = require('unified')
var parse = require('rehype-parse')
var select = require('hast-util-select')
var toString = require('hast-util-to-string')
var list = require('.')

https.get(
  'https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types',
  onconnection
)

function onconnection(response) {
  response.pipe(concat(onconcat)).on('error', bail)
}

function onconcat(buf) {
  var tree = unified().use(parse).parse(buf)
  var nodes = select.selectAll('.standard-table td:first-child code', tree)
  var index = -1
  var data

  while (++index < nodes.length) {
    data = toString(nodes[index])

    if (data && !list.includes(data)) {
      list.push(data)
    }
  }

  fs.writeFile('index.json', JSON.stringify(list.sort(), null, 2) + '\n', bail)
}
