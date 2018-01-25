
var moviesJson = require('../movies.json');

exports.home = function(req, res){
  var movies = moviesJson.movies;
  //Render Home Template
  res.render('home', {
    title: 'THe movies HOme Page!',
    movies: movies
  });
};

//Render Movie Single
exports.movie_single = function(req, res){

  //parameter episode number
  var episode_number = req.params.episode_number;
  //Movies array
  var movies = moviesJson.movies;

  if (episode_number >= 1 && episode_number <= 6){

    //single Movie
    var movie = movies[episode_number-1];
    //Movie Title
    var title = movie.title;

    var main_characters = movie.main_characters;

    //passing variables to template
    res.render('movie_single', {
      movies : movies,
      title: title,
      movie: movie,
      main_characters: main_characters

    });

  } else {
    res.render('not_Found',{
      movies:movies,
      title: "This is not the Page you are looking for!"
    });
  };
};

// not found
exports.notFound = function(req,res) {
  var movies = moviesJson.movies;
  res.render('not_Found', {
    movies: movies,
    title: 'This is not the Page you are looking for!'
  });

};
