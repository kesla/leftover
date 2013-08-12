var leftover = require('./leftover')

  , fn = leftover(3, function(err, data) {
      console.log(data) // will pring out "three"
    })

fn(null, 'one')
fn(null, 'two')
fn(null, 'three')
