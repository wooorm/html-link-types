import assert from 'node:assert'
import test from 'tape'
import {htmlLinkTypes} from './index.js'

test('htmlLinkTypes', function (t) {
  t.ok(Array.isArray(htmlLinkTypes), 'should be an `array`')

  t.doesNotThrow(function () {
    var index = -1
    while (++index < htmlLinkTypes.length) {
      assert.equal(
        typeof htmlLinkTypes[index],
        'string',
        '`' + htmlLinkTypes[index] + '` should be string'
      )
    }
  }, 'should be all `string`')

  t.end()
})
