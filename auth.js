var users = [];

function validateCreds(username, password, fn) {
    query = 'SELECT * FROM tbl_users WHERE username="'+username+'" AND password="'+password+'";';    
    console.log(query);
    MySQL_connection.query(query, function(err, user_data) {
        if (user_data.length == 1) {
            return fn(null, user_data[0]);
        } else {
            return fn('Invalid Login', null);
        }        
    });
}

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(user, done) {
    for (var i = users.length - 1; i >= 0; i--) {
        if (users[i].username == user) { return done(null, users[i]); }
    }
    done('User ' + user + ' does not exist', null);
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    process.nextTick(function () {
      validateCreds(username, password, function(err, user_data) {
        if (err) { return done(err); }
        user = { username: username, details: user_data };
        for (var i = users.length - 1; i >= 0; i--) {
            if (users[i].username == username) { users.splice(i,1); break; }
        }
        users.push(user);
        return done(null, user);
      })
    });
  }
));

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

function ensureAdminAuthenticated(req, res, next) {
  if (req.user) {
    if (!req.user.details.admin) {
        res.render('error.html', {
            error: 'Must login as an Admin User'
        });
    }
  }
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

