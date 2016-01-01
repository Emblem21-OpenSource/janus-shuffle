# janus-shuffle
Janus-Shuffle applies **davidbau**'s ``seedrandom`` to power the randomness requirement of **coolaj86**'s ``knuth-shuffle``, allowing a user to shuffle strings based on string-based seeds.  This library will work in NodeJS and on the browser. 

## Installation

``npm install janus-shuffle``

## API

### shuffle(str, key)

**str** is the string you wish to shuffle.

**key** is the key that will seed the random number generator.

This function returns a shuffled string.

### deshuffle(str, key)

**str** is the string you wish to deshuffle.

**key** is the key that will seed the random number generator.  The key will have to be the same that was used during the shuffle to deshuffle the string correctly.

This function returns a deshuffled string.

## Examples

```javascript
var Shuffler = require('janus-shuffle');

var shuffled = Shuffler.shuffle('This is a test statement', 'key');
// htttse iam asstis tT een

var unshuffled = Shuffler.deshuffle(shuffled, 'key');
// This is a test statement
```