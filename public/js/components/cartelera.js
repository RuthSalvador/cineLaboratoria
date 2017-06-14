'use strict';

const itemMovie = (movie) => {
  const id = movie.nombre.toLowerCase().split(" ").join("-");

  const item = $('<a href ="details.html?id='+id+'" class="item"></a>');
  const img = $('<img src="'+movie.portada+'"/>');
  const p = $('<p>'+movie.nombre+'</p>');

  item.append(img);
  item.append(p);

  return item;
};

const Cartelera = (data) => {
  const c = $('<div class="cartelera"></div>');
  data.forEach((movie) => {
    c.append(itemMovie(movie));
  });

  return c;
};