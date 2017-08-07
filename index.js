var express 			= require("express"),
	app					= express(),
	appStoreReviews 	= require("./reviews-to-console");
	

// serve static files
	app.use(express.static(__dirname + "/www"));

// Your error handler or application error handler must be the last endpoint in your list of routes 
	app.use((err, req, res, next) => {
		res.status(422).send({ error: err.message });

	});

// listen for incoming requests
	app.listen(process.env.port || 4000, () => {
		console.log("server started...");
	});