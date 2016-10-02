(function(){
  var eirik = {
    name: 'Eirik',
    age: 29,
    favoriteMovies: [
      {
        name: 'Jaws',
        credits: {
          director: 'Steven Spielberg',
          star: 'Roy Scheider'
        }
      },
      {
        name: 'Alien',
        credits: {
          director: 'Ridley Scott',
          star: 'Sigourney Weaver'
        }
      },
      {
        name: 'Hot Fuzz',
        credits: {
          director: 'Edgar Wright',
          star: 'Simon Pegg'
        }
      }
    ]
  };

  function presentMyself(myself) {
    var summary = '';

    summary = summary + 'Hello, my name is ' + myself.name + '. I\'m ' + myself.age + ' years old and my favorite movies are ';

    var startIndex = myself.favoriteMovies.length - 1;
    for (var i = startIndex; i >= 0; i--) {
      var movie = myself.favoriteMovies[i];
      summary = summary + movie.name + ' which is directed by ' + movie.credits.director + ' and stars ' + movie.credits.star + ', ';
    }

    var p = document.createElement('p');
    p.innerHTML = summary;

    document.body.appendChild(p);
    console.log(myself);
  }

  presentMyself(eirik);

  function saveMyself(myself) {
    var json = JSON.stringify(myself);
    window.sessionStorage.setItem('eirik', json);
  }

  saveMyself(eirik);

  function getMyself() {
    var json = window.sessionStorage.getItem('eirik');
    var myself = JSON.parse(json);
    console.log('Myself from session storage', myself);
  }

  getMyself();
}());
