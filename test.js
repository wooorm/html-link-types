import assert from 'node:assert/strict'
import test from 'node:test'
import {htmlLinkTypes} from './index.js'

test('htmlLinkTypes', function () {
  assert.ok(Array.isArray(htmlLinkTypes), 'should be an `array`')

  let index = -1
  while (++index < htmlLinkTypes.length) {
    assert.equal(
      typeof htmlLinkTypes[index],
      'string',
      '`' + htmlLinkTypes[index] + '` should be string'
    )
  }
})
