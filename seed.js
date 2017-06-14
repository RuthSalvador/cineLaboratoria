const levelup   = require('levelup');
const leveldown = require('leveldown');
const data      = require('./movies');

leveldown.destroy('./data', function (err) { console.log('BD Destruida') });

const db  = levelup('./data', {valueEncoding: 'json'});

data.movies.forEach((movie) => {
  const id = movie.nombre.toLowerCase().split(" ").join("-");
  db.put(id,movie,(err) => {
    console.log("pelicula: "+movie.nombre + " importada");
  });
});