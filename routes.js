app.get('/', function (req, res) {
    res.render('home.html', {
    	global: global_vars
    });
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
