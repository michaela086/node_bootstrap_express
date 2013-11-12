var express = require('express')
  , cons = require('consolidate')
  , swig = require('swig')
  , passport = require('passport')  
  , LocalStrategy = require('passport-local').Strategy
  , flash = require('connect-flash')
  , app = express()
  , http = require('http')
  , fs = require('fs')
  , mysql = require('mysql')
  , server = http.createServer(app)
  , sys = require('sys')
  , path = require('path')
  , exec = require('child_process').exec;

app.use(express.static(__dirname + '/public'));

app.configure(function(){
  app.engine('.html', cons.swig);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

var global_vars = {
  listening_port: '8080',
  title: 'global title',
  name: 'Company Name',
  site_description: 'This is a startup website',
  site_author: 'Michael Miller',
  copyright_name: 'Company Name, Inc.',
  copyright_year: '2013'
}

eval(fs.readFileSync('./auth.js')+'');
eval(fs.readFileSync('./routes.js')+'');
eval(fs.readFileSync('./settings.js')+'');

server.listen(global_vars.listening_port);
console.log('listening on port ' + global_vars.listening_port);
console.log('View at: http://localhost:' + global_vars.listening_port);
console.log('or');
console.log('View at: http://serverIP:' + global_vars.listening_port);