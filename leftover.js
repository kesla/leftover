var leftover = function(num, callback) {
      var i = 0
        , finished = false

      return function(err) {
        if (!finished) {
          if (err) {
            finished = true
            callback(err)
          } else {
            i++
            if (i === num) {
              finished = true
              callback.apply(null, arguments)
            }
          }
        }
      }
    }

module.exports = leftover
