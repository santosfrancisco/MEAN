var http = require('http');
var app = require('./config/express.js')();

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express listening on port ' + app.get('port'));
});
