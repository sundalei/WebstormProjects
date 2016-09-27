'use strict';

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const rest = require('./rest');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// static file support:
let staticFile = require('./static-files');
app.use(staticFile('/static/', __dirname + '/static'));

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('view', {
    noCache: true,
    watch: true
}));

app.use(rest.restify());

app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');