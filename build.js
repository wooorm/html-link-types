'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');
var bail = require('bail');
var concat = require('concat-stream');
var unified = require('unified');
var parse = require('rehype-parse');
var select = require('hast-util-select');
var toString = require('hast-util-to-string');
var list = require('.');

https.get('https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types', function (res) {
  res.pipe(concat(onconcat)).on('error', bail);

  function onconcat(buf) {
    var tree = unified().use(parse).parse(buf);

    select.selectAll('.standard-table td:first-child code', tree).forEach(each);

    fs.writeFile(
      path.join(__dirname, 'index.json'),
      JSON.stringify(list.sort(), 0, 2) + '\n',
      bail
    );

    function each(node) {
      var data = toString(node);

      if (data && list.indexOf(data) === -1) {
        list.push(data);
      }
    }
  }
});
