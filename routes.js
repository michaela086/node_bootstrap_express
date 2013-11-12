app.get('/', function (req, res) {
    res.render('home.html', {
    	global: global_vars
    });
});

app.get('/login', function (req, res) {
    res.render('login.html', {
    	global: global_vars,
    	page_title: 'login'
    });
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), function(req, res) {
    res.redirect('/');
});

app.get('/about', function (req, res) {
    res.render('about.html', {
    	global: global_vars,
    	page_title: 'about'
    });
});

app.get('/contact', function (req, res) {
    res.render('contact.html', {
    	global: global_vars,
    	page_title: 'contact'
    });
});

app.get('/privacy', function (req, res) {
    res.render('privacy.html', {
    	global: global_vars,
    	page_title: 'privacy'
    });
});

app.get('/terms', function (req, res) {
    res.render('terms.html', {
    	global: global_vars,
    	page_title: 'terms'
    });
});

app.get('/quote', function (req, res) {
    res.render('quote.html', {
    	global: global_vars,
    	page_title: 'Free Quote!'
    });
});

app.get('/admin', ensureAdminAuthenticated, function (req, res) {
    res.render('admin.html', {
    	global: global_vars
    });
});

