var test = require('tap').test
  , leftover = require('../leftover')

test('withour error', function(t) {
  var fn = leftover(4, function(err, number) {
        t.notOk(err, 'should not error')
        t.equal(number, '4')
        t.end()
      })

  fn(null, '1')
  fn(null, '2')
  fn(null, '3')
  fn(null, '4')
  fn(null, '5')
})

test('with error', function(t) {
  var fn = leftover(4, function(err, number) {
        t.equal(err, expected)
        t.end()
      })
    , expected = new Error('beep boop')

    fn(null, '1')
    fn(expected)
    fn(null, '2')
})
