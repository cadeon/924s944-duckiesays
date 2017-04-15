var Koa = require('koa');
var Body = require('koa-better-body');
var Helmet = require('koa-helmet');
var Session = require('koa-session');
var Views = require('koa-views');
var Flash = require('koa-flash');
var Router = require('koa-router');
var serve = require('koa-static-folder');
var config = require('./config/config');
var dbConfig = require('./config/knex');

var winston = require('winston');

var app = Koa();

app.use(require('koa-error')());
app.keys = [config.secret];

app.use(Helmet());
app.use(Body());
app.use(Session(app));
app.use(Flash());
app.use(Views(__dirname + '/app/views', { extension: 'ejs' }));

require('./app/routes')(app);

var logger = new winston.Logger({transports : winston.loggers.options.transports});
logger.info('Server started');

var server = app.listen(config.port);
module.exports = app;
module.exports = server; // support unit test

console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);