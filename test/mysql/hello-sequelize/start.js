var register = require('babel-register');

register({
    presets: ['stage-3']
});

require('./app');
// require('./test');