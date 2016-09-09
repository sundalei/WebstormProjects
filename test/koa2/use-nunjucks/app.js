'use strict';

const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    var
       autoescape = opts.autoescape || true,
       noCache = opts.noCache || false,
       watch = opts.watch || false,
       throwOnUndefined = opts.throwOnUndefined || false,

       env = new nunjucks.Environment(
           new nunjucks.FileSystemLoader('views', {
               noCache: noCache,
               watch: watch
           }), {
               autoescape: autoescape,
               throwOnUndefined: throwOnUndefined
           }
       );
    
    if(opts.filters) {
        for(var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    
    return env;
}

var env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

// var s = env.render('hello.html', {name: '小明'});
var s = env.render('hello.html', {
    name: '<Nunjucks>',
    fruits: ['Apple', 'Pear', 'Banana'],
    count: 12000
});
console.log(s);

console.log('---------------------------------------------------------------');

var extend = env.render('extend.html', {header: 'hello', body: 'bla bla bla...'});
console.log(extend);