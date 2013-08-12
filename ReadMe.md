# leftover

Call callbacks a couple of times and return with the last data

## Installation

```
npm install leftover
```

## Example

```javascript
var leftover = require('./leftover')

  , fn = leftover(3, function(err, data) {
      console.log(data) // will pring out "three"
    })

fn(null, 'one')
fn(null, 'two')
fn(null, 'three')
```
