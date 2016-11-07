'use strict';

/* Dependencies. */
var assert = require('assert');
var test = require('tape');
var htmlLinkTypes = require('./');

/* Tests. */
test('htmlLinkTypes', function (t) {
  t.ok(
    Array.isArray(htmlLinkTypes),
    'should be an `array`'
  );

  t.doesNotThrow(function () {
    htmlLinkTypes.forEach(function (type) {
      assert(typeof type, 'string', '`' + type + '` should be string');
    });
  }, 'should be all `string`');

  t.end();
});
