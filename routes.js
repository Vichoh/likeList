

module.exports = function(app){

	// on server started we can load our index.html page
	/*app.get('/', function(req, res, next) {
		// Render views/index.html
		res.render('index');
		next();
	});*/

	app.get('/', function(req, res) {
		// Render views/indexAngular.html
		res.render('indexAngular');
	});
	
};

