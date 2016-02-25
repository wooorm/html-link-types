/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module html-link-types
 * @fileoverview Test suite for `html-link-types`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var htmlLinkTypes = require('./index.js');

/*
 * Tests.
 */

test('htmlLinkTypes', function (t) {
    t.ok(
        Array.isArray(htmlLinkTypes),
        'should be an `array`'
    );

    htmlLinkTypes.forEach(function (vendor) {
        t.equal(
            typeof vendor,
            'string',
            '`' + vendor + '` should be a string'
        );
    });

    t.end();
});
