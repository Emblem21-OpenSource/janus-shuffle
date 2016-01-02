var shuffler = require('./index');
var assert = require('assert');

var shuffled = shuffler.shuffle('This is a test statement', 'key');
var unshuffled = shuffler.deshuffle(shuffled, 'key');
assert.strictEqual(shuffled, '  ishh  eahtemThnttTssea|iTie nhtiit|en|aamss|mTanTmm|n');
assert.strictEqual(unshuffled, 'This is a test statement');