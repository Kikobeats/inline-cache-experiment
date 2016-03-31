'use strict'

var lodash = require('lodash')
var bench = require('fastbench')

var base = require('./lib/base')
var lookup = require('./lib/lookup')
var inline = require('./lib/inline')
var inlineSwitch = require('./lib/inline-switch')
var inlineObject = require('./lib/inline-object')

var lhs = lodash.range(100000)
var divisor = 2

var run = bench([
  function benchBase (done) {
    process.nextTick(function () {
      base()(lhs, divisor)
      done()
    })
  },
  function benchLookUpTable (done) {
    process.nextTick(function () {
      lookup()(lhs, divisor)
      done()
    })
  },
  function benchInlineIfElse (done) {
    process.nextTick(function () {
      inline()(lhs, divisor)
      done()
    })
  },
  function benchInlineSwitch (done) {
    process.nextTick(function () {
      inlineSwitch()(lhs, divisor)
      done()
    })
  },
  function benchInlineObject (done) {
    process.nextTick(function () {
      inlineObject()(lhs, divisor)
      done()
    })
  }
], 1000)

// run them two times
run(run)
