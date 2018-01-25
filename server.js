var express = require('express');

//new app instance of express
var app = express();


app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');

//Tells app to look into public folder for static files
app.use(express.static(path.join(__dirname, 'public')));
//Routes

//Home
app.get('/', routes.home);

//Movie Single
app.get('/starwars/:episode_number?', routes.movie_single);

// not found
app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);
