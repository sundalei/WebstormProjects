'use strict';

const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可以多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs');

console.log(hash.digest('hex'));