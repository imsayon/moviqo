export const ROWS = ["A","B","C","D","E","F","G","H"];
export const COLS = 12;
export const PREMIUM_ROWS = ["D","E","F"];
export const RECLINER_ROWS = ["G","H"];
export const BOOKING_FEE = 30;
export const MAX_SEATS_PER_BOOKING = 8;

// Catalog generated from a public top-rated movies CSV dataset. Posters are remote media URLs.
export const movieCatalog = [
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 9.3,
    "duration": "142 min",
    "year": 1994,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX500_.jpg",
    "director": "Frank Darabont",
    "writer": "Curated top-rated cinema selection",
    "cast": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    "stars": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler"
    ],
    "metaScore": 80,
    "votes": 2343110,
    "gross": "28,341,469",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "The Godfather",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama"
    ],
    "rating": 9.2,
    "duration": "175 min",
    "year": 1972,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Francis Ford Coppola",
    "writer": "Curated top-rated cinema selection",
    "cast": "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
    "stars": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Diane Keaton"
    ],
    "metaScore": 100,
    "votes": 1620367,
    "gross": "134,966,411",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "genre": "Action",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "rating": 9,
    "duration": "152 min",
    "year": 2008,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX500_.jpg",
    "director": "Christopher Nolan",
    "writer": "Curated top-rated cinema selection",
    "cast": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "stars": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine"
    ],
    "metaScore": 84,
    "votes": 2303232,
    "gross": "534,858,444",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "The Godfather: Part II",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama"
    ],
    "rating": 9,
    "duration": "202 min",
    "year": 1974,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Francis Ford Coppola",
    "writer": "Curated top-rated cinema selection",
    "cast": "Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton",
    "stars": [
      "Al Pacino",
      "Robert De Niro",
      "Robert Duvall",
      "Diane Keaton"
    ],
    "metaScore": 90,
    "votes": 1129952,
    "gross": "57,300,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "12 Angry Men",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama"
    ],
    "rating": 9,
    "duration": "96 min",
    "year": 1957,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX500_.jpg",
    "director": "Sidney Lumet",
    "writer": "Curated top-rated cinema selection",
    "cast": "Henry Fonda, Lee J. Cobb, Martin Balsam, John Fiedler",
    "stars": [
      "Henry Fonda",
      "Lee J. Cobb",
      "Martin Balsam",
      "John Fiedler"
    ],
    "metaScore": 96,
    "votes": 689845,
    "gross": "4,360,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "The Lord of the Rings: The Return of the King",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.9,
    "duration": "201 min",
    "year": 2003,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "price": {
      "standard": 360,
      "premium": 500,
      "recliner": 680
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Peter Jackson",
    "writer": "Curated top-rated cinema selection",
    "cast": "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
    "stars": [
      "Elijah Wood",
      "Viggo Mortensen",
      "Ian McKellen",
      "Orlando Bloom"
    ],
    "metaScore": 94,
    "votes": 1642758,
    "gross": "377,845,905",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Pulp Fiction",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama"
    ],
    "rating": 8.9,
    "duration": "154 min",
    "year": 1994,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "price": {
      "standard": 380,
      "premium": 520,
      "recliner": 700
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Quentin Tarantino",
    "writer": "Curated top-rated cinema selection",
    "cast": "John Travolta, Uma Thurman, Samuel L. Jackson, Bruce Willis",
    "stars": [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson",
      "Bruce Willis"
    ],
    "metaScore": 94,
    "votes": 1826188,
    "gross": "107,928,762",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Schindler's List",
    "genre": "Biography",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "rating": 8.9,
    "duration": "195 min",
    "year": 1993,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Steven Spielberg",
    "writer": "Curated top-rated cinema selection",
    "cast": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Caroline Goodall",
    "stars": [
      "Liam Neeson",
      "Ralph Fiennes",
      "Ben Kingsley",
      "Caroline Goodall"
    ],
    "metaScore": 94,
    "votes": 1213505,
    "gross": "96,898,818",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Inception",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 8.8,
    "duration": "148 min",
    "year": 2010,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX500_.jpg",
    "director": "Christopher Nolan",
    "writer": "Curated top-rated cinema selection",
    "cast": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Ken Watanabe",
    "stars": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Ken Watanabe"
    ],
    "metaScore": 74,
    "votes": 2067042,
    "gross": "292,576,195",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Fight Club",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.8,
    "duration": "139 min",
    "year": 1999,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": "top-rated",
    "badgeLabel": "Top Rated",
    "description": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "David Fincher",
    "writer": "Curated top-rated cinema selection",
    "cast": "Brad Pitt, Edward Norton, Meat Loaf, Zach Grenier",
    "stars": [
      "Brad Pitt",
      "Edward Norton",
      "Meat Loaf",
      "Zach Grenier"
    ],
    "metaScore": 66,
    "votes": 1854740,
    "gross": "37,030,102",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.8,
    "duration": "178 min",
    "year": 2001,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "classic",
    "badgeLabel": "Classic",
    "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX500_.jpg",
    "director": "Peter Jackson",
    "writer": "Curated top-rated cinema selection",
    "cast": "Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean",
    "stars": [
      "Elijah Wood",
      "Ian McKellen",
      "Orlando Bloom",
      "Sean Bean"
    ],
    "metaScore": 92,
    "votes": 1661481,
    "gross": "315,544,750",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "title": "Forrest Gump",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Romance"
    ],
    "rating": 8.8,
    "duration": "142 min",
    "year": 1994,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "classic",
    "badgeLabel": "Classic",
    "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX500_.jpg",
    "director": "Robert Zemeckis",
    "writer": "Curated top-rated cinema selection",
    "cast": "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
    "stars": [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise",
      "Sally Field"
    ],
    "metaScore": 82,
    "votes": 1809221,
    "gross": "330,252,182",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "title": "Il buono, il brutto, il cattivo",
    "genre": "Western",
    "genres": [
      "Western"
    ],
    "rating": 8.8,
    "duration": "161 min",
    "year": 1966,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": "classic",
    "badgeLabel": "Classic",
    "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    "price": {
      "standard": 360,
      "premium": 500,
      "recliner": 680
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX500_.jpg",
    "director": "Sergio Leone",
    "writer": "Curated top-rated cinema selection",
    "cast": "Clint Eastwood, Eli Wallach, Lee Van Cleef, Aldo Giuffrè",
    "stars": [
      "Clint Eastwood",
      "Eli Wallach",
      "Lee Van Cleef",
      "Aldo Giuffrè"
    ],
    "metaScore": 90,
    "votes": 688390,
    "gross": "6,100,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "title": "The Lord of the Rings: The Two Towers",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.7,
    "duration": "179 min",
    "year": 2002,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": "classic",
    "badgeLabel": "Classic",
    "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    "price": {
      "standard": 380,
      "premium": 520,
      "recliner": 700
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Peter Jackson",
    "writer": "Curated top-rated cinema selection",
    "cast": "Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom",
    "stars": [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen",
      "Orlando Bloom"
    ],
    "metaScore": 87,
    "votes": 1485555,
    "gross": "342,551,365",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "title": "The Matrix",
    "genre": "Action",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "rating": 8.7,
    "duration": "136 min",
    "year": 1999,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": "classic",
    "badgeLabel": "Classic",
    "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Lana Wachowski",
    "writer": "Curated top-rated cinema selection",
    "cast": "Lilly Wachowski, Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    "stars": [
      "Lilly Wachowski",
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss"
    ],
    "metaScore": 73,
    "votes": 1676426,
    "gross": "171,479,930",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "title": "Goodfellas",
    "genre": "Biography",
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "rating": 8.7,
    "duration": "146 min",
    "year": 1990,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "classic",
    "badgeLabel": "Classic",
    "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Martin Scorsese",
    "writer": "Curated top-rated cinema selection",
    "cast": "Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco",
    "stars": [
      "Robert De Niro",
      "Ray Liotta",
      "Joe Pesci",
      "Lorraine Bracco"
    ],
    "metaScore": 90,
    "votes": 1020727,
    "gross": "46,836,394",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.7,
    "duration": "124 min",
    "year": 1980,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "classic",
    "badgeLabel": "Classic",
    "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Irvin Kershner",
    "writer": "Curated top-rated cinema selection",
    "cast": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    "stars": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Billy Dee Williams"
    ],
    "metaScore": 82,
    "votes": 1159315,
    "gross": "290,475,067",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "title": "One Flew Over the Cuckoo's Nest",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.7,
    "duration": "133 min",
    "year": 1975,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": "classic",
    "badgeLabel": "Classic",
    "description": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX500_.jpg",
    "director": "Milos Forman",
    "writer": "Curated top-rated cinema selection",
    "cast": "Jack Nicholson, Louise Fletcher, Michael Berryman, Peter Brocco",
    "stars": [
      "Jack Nicholson",
      "Louise Fletcher",
      "Michael Berryman",
      "Peter Brocco"
    ],
    "metaScore": 83,
    "votes": 918088,
    "gross": "112,000,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "title": "Hamilton",
    "genre": "Biography",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "rating": 8.6,
    "duration": "160 min",
    "year": 2020,
    "certificate": "PG-13",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNjViNWRjYWEtZTI0NC00N2E3LTk0NGQtMjY4NTM3OGNkZjY0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX500_.jpg",
    "director": "Thomas Kail",
    "writer": "Curated top-rated cinema selection",
    "cast": "Lin-Manuel Miranda, Phillipa Soo, Leslie Odom Jr., Renée Elise Goldsberry",
    "stars": [
      "Lin-Manuel Miranda",
      "Phillipa Soo",
      "Leslie Odom Jr.",
      "Renée Elise Goldsberry"
    ],
    "metaScore": 90,
    "votes": 55291,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "title": "Gisaengchung",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "rating": 8.6,
    "duration": "132 min",
    "year": 2019,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX500_.jpg",
    "director": "Bong Joon Ho",
    "writer": "Curated top-rated cinema selection",
    "cast": "Kang-ho Song, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-sik",
    "stars": [
      "Kang-ho Song",
      "Lee Sun-kyun",
      "Cho Yeo-jeong",
      "Choi Woo-sik"
    ],
    "metaScore": 96,
    "votes": 552778,
    "gross": "53,367,844",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 21,
    "title": "Soorarai Pottru",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.6,
    "duration": "153 min",
    "year": 2020,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Nedumaaran Rajangam \"Maara\" sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTc2ZTlmYmItMDBhYS00YmMzLWI4ZjAtMTI5YTBjOTFiMGEwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX500_.jpg",
    "director": "Sudha Kongara",
    "writer": "Curated top-rated cinema selection",
    "cast": "Suriya, Madhavan, Paresh Rawal, Aparna Balamurali",
    "stars": [
      "Suriya",
      "Madhavan",
      "Paresh Rawal",
      "Aparna Balamurali"
    ],
    "metaScore": null,
    "votes": 54995,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 22,
    "title": "Interstellar",
    "genre": "Adventure",
    "genres": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "rating": 8.6,
    "duration": "169 min",
    "year": 2014,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX500_.jpg",
    "director": "Christopher Nolan",
    "writer": "Curated top-rated cinema selection",
    "cast": "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Mackenzie Foy",
    "stars": [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Mackenzie Foy"
    ],
    "metaScore": 74,
    "votes": 1512360,
    "gross": "188,020,017",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 23,
    "title": "Cidade de Deus",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama"
    ],
    "rating": 8.6,
    "duration": "130 min",
    "year": 2002,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Fernando Meirelles",
    "writer": "Curated top-rated cinema selection",
    "cast": "Kátia Lund, Alexandre Rodrigues, Leandro Firmino, Matheus Nachtergaele",
    "stars": [
      "Kátia Lund",
      "Alexandre Rodrigues",
      "Leandro Firmino",
      "Matheus Nachtergaele"
    ],
    "metaScore": 79,
    "votes": 699256,
    "gross": "7,563,397",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 24,
    "title": "Sen to Chihiro no kamikakushi",
    "genre": "Animation",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "rating": 8.6,
    "duration": "125 min",
    "year": 2001,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX500_.jpg",
    "director": "Hayao Miyazaki",
    "writer": "Curated top-rated cinema selection",
    "cast": "Daveigh Chase, Suzanne Pleshette, Miyu Irino, Rumi Hiiragi",
    "stars": [
      "Daveigh Chase",
      "Suzanne Pleshette",
      "Miyu Irino",
      "Rumi Hiiragi"
    ],
    "metaScore": 96,
    "votes": 651376,
    "gross": "10,055,859",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 25,
    "title": "Saving Private Ryan",
    "genre": "Drama",
    "genres": [
      "Drama",
      "War"
    ],
    "rating": 8.6,
    "duration": "169 min",
    "year": 1998,
    "certificate": "R",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX500_.jpg",
    "director": "Steven Spielberg",
    "writer": "Curated top-rated cinema selection",
    "cast": "Tom Hanks, Matt Damon, Tom Sizemore, Edward Burns",
    "stars": [
      "Tom Hanks",
      "Matt Damon",
      "Tom Sizemore",
      "Edward Burns"
    ],
    "metaScore": 91,
    "votes": 1235804,
    "gross": "216,540,909",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 26,
    "title": "The Green Mile",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.6,
    "duration": "189 min",
    "year": 1999,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX67_CR0,0,67,98_AL_.jpg",
    "director": "Frank Darabont",
    "writer": "Curated top-rated cinema selection",
    "cast": "Tom Hanks, Michael Clarke Duncan, David Morse, Bonnie Hunt",
    "stars": [
      "Tom Hanks",
      "Michael Clarke Duncan",
      "David Morse",
      "Bonnie Hunt"
    ],
    "metaScore": 61,
    "votes": 1147794,
    "gross": "136,801,374",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 27,
    "title": "La vita è bella",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.6,
    "duration": "116 min",
    "year": 1997,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "restored",
    "badgeLabel": "Restored",
    "description": "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX500_.jpg",
    "director": "Roberto Benigni",
    "writer": "Curated top-rated cinema selection",
    "cast": "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini, Giustino Durano",
    "stars": [
      "Roberto Benigni",
      "Nicoletta Braschi",
      "Giorgio Cantarini",
      "Giustino Durano"
    ],
    "metaScore": 59,
    "votes": 623629,
    "gross": "57,598,247",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 28,
    "title": "Se7en",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "rating": 8.6,
    "duration": "127 min",
    "year": 1995,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "David Fincher",
    "writer": "Curated top-rated cinema selection",
    "cast": "Morgan Freeman, Brad Pitt, Kevin Spacey, Andrew Kevin Walker",
    "stars": [
      "Morgan Freeman",
      "Brad Pitt",
      "Kevin Spacey",
      "Andrew Kevin Walker"
    ],
    "metaScore": 65,
    "votes": 1445096,
    "gross": "100,125,643",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 29,
    "title": "The Silence of the Lambs",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8.6,
    "duration": "118 min",
    "year": 1991,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Jonathan Demme",
    "writer": "Curated top-rated cinema selection",
    "cast": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney, Kasi Lemmons",
    "stars": [
      "Jodie Foster",
      "Anthony Hopkins",
      "Lawrence A. Bonney",
      "Kasi Lemmons"
    ],
    "metaScore": 85,
    "votes": 1270197,
    "gross": "130,742,922",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 30,
    "title": "Star Wars",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 8.6,
    "duration": "121 min",
    "year": 1977,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "George Lucas",
    "writer": "Curated top-rated cinema selection",
    "cast": "Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness",
    "stars": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Alec Guinness"
    ],
    "metaScore": 90,
    "votes": 1231473,
    "gross": "322,740,140",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 31,
    "title": "Seppuku",
    "genre": "Action",
    "genres": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "rating": 8.6,
    "duration": "133 min",
    "year": 1962,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UX500_.jpg",
    "director": "Masaki Kobayashi",
    "writer": "Curated top-rated cinema selection",
    "cast": "Tatsuya Nakadai, Akira Ishihama, Shima Iwashita, Tetsurô Tanba",
    "stars": [
      "Tatsuya Nakadai",
      "Akira Ishihama",
      "Shima Iwashita",
      "Tetsurô Tanba"
    ],
    "metaScore": 85,
    "votes": 42004,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 32,
    "title": "Shichinin no samurai",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.6,
    "duration": "207 min",
    "year": 1954,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX500_.jpg",
    "director": "Akira Kurosawa",
    "writer": "Curated top-rated cinema selection",
    "cast": "Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki",
    "stars": [
      "Toshirô Mifune",
      "Takashi Shimura",
      "Keiko Tsushima",
      "Yukiko Shimazaki"
    ],
    "metaScore": 98,
    "votes": 315744,
    "gross": "269,061",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 33,
    "title": "It's a Wonderful Life",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "rating": 8.6,
    "duration": "130 min",
    "year": 1946,
    "certificate": "PG",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UX500_.jpg",
    "director": "Frank Capra",
    "writer": "Curated top-rated cinema selection",
    "cast": "James Stewart, Donna Reed, Lionel Barrymore, Thomas Mitchell",
    "stars": [
      "James Stewart",
      "Donna Reed",
      "Lionel Barrymore",
      "Thomas Mitchell"
    ],
    "metaScore": 89,
    "votes": 405801,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 34,
    "title": "Joker",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8.5,
    "duration": "122 min",
    "year": 2019,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX500_.jpg",
    "director": "Todd Phillips",
    "writer": "Curated top-rated cinema selection",
    "cast": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    "stars": [
      "Joaquin Phoenix",
      "Robert De Niro",
      "Zazie Beetz",
      "Frances Conroy"
    ],
    "metaScore": 59,
    "votes": 939252,
    "gross": "335,451,311",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 35,
    "title": "Whiplash",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Music"
    ],
    "rating": 8.5,
    "duration": "106 min",
    "year": 2014,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX500_.jpg",
    "director": "Damien Chazelle",
    "writer": "Curated top-rated cinema selection",
    "cast": "Miles Teller, J.K. Simmons, Melissa Benoist, Paul Reiser",
    "stars": [
      "Miles Teller",
      "J.K. Simmons",
      "Melissa Benoist",
      "Paul Reiser"
    ],
    "metaScore": 88,
    "votes": 717585,
    "gross": "13,092,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 36,
    "title": "The Intouchables",
    "genre": "Biography",
    "genres": [
      "Biography",
      "Comedy",
      "Drama"
    ],
    "rating": 8.5,
    "duration": "112 min",
    "year": 2011,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UX500_.jpg",
    "director": "Olivier Nakache",
    "writer": "Curated top-rated cinema selection",
    "cast": "Éric Toledano, François Cluzet, Omar Sy, Anne Le Ny",
    "stars": [
      "Éric Toledano",
      "François Cluzet",
      "Omar Sy",
      "Anne Le Ny"
    ],
    "metaScore": 57,
    "votes": 760360,
    "gross": "13,182,281",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 37,
    "title": "The Prestige",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "duration": "130 min",
    "year": 2006,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UX67_CR0,0,67,98_AL_.jpg",
    "director": "Christopher Nolan",
    "writer": "Curated top-rated cinema selection",
    "cast": "Christian Bale, Hugh Jackman, Scarlett Johansson, Michael Caine",
    "stars": [
      "Christian Bale",
      "Hugh Jackman",
      "Scarlett Johansson",
      "Michael Caine"
    ],
    "metaScore": 66,
    "votes": 1190259,
    "gross": "53,089,891",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 38,
    "title": "The Departed",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8.5,
    "duration": "151 min",
    "year": 2006,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX67_CR0,0,67,98_AL_.jpg",
    "director": "Martin Scorsese",
    "writer": "Curated top-rated cinema selection",
    "cast": "Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg",
    "stars": [
      "Leonardo DiCaprio",
      "Matt Damon",
      "Jack Nicholson",
      "Mark Wahlberg"
    ],
    "metaScore": 85,
    "votes": 1189773,
    "gross": "132,384,315",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 39,
    "title": "The Pianist",
    "genre": "Biography",
    "genres": [
      "Biography",
      "Drama",
      "Music"
    ],
    "rating": 8.5,
    "duration": "150 min",
    "year": 2002,
    "certificate": "R",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Roman Polanski",
    "writer": "Curated top-rated cinema selection",
    "cast": "Adrien Brody, Thomas Kretschmann, Frank Finlay, Emilia Fox",
    "stars": [
      "Adrien Brody",
      "Thomas Kretschmann",
      "Frank Finlay",
      "Emilia Fox"
    ],
    "metaScore": 85,
    "votes": 729603,
    "gross": "32,572,577",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 40,
    "title": "Gladiator",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.5,
    "duration": "155 min",
    "year": 2000,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": "restored",
    "badgeLabel": "Restored",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Ridley Scott",
    "writer": "Curated top-rated cinema selection",
    "cast": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
    "stars": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed"
    ],
    "metaScore": 67,
    "votes": 1341460,
    "gross": "187,705,427",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 41,
    "title": "American History X",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.5,
    "duration": "119 min",
    "year": 1998,
    "certificate": "R",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX500_.jpg",
    "director": "Tony Kaye",
    "writer": "Curated top-rated cinema selection",
    "cast": "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
    "stars": [
      "Edward Norton",
      "Edward Furlong",
      "Beverly D'Angelo",
      "Jennifer Lien"
    ],
    "metaScore": 62,
    "votes": 1034705,
    "gross": "6,719,864",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 42,
    "title": "The Usual Suspects",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "rating": 8.5,
    "duration": "106 min",
    "year": 1995,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Bryan Singer",
    "writer": "Curated top-rated cinema selection",
    "cast": "Kevin Spacey, Gabriel Byrne, Chazz Palminteri, Stephen Baldwin",
    "stars": [
      "Kevin Spacey",
      "Gabriel Byrne",
      "Chazz Palminteri",
      "Stephen Baldwin"
    ],
    "metaScore": 77,
    "votes": 991208,
    "gross": "23,341,568",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 43,
    "title": "Léon",
    "genre": "Action",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "rating": 8.5,
    "duration": "110 min",
    "year": 1994,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UX500_.jpg",
    "director": "Luc Besson",
    "writer": "Curated top-rated cinema selection",
    "cast": "Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello",
    "stars": [
      "Jean Reno",
      "Gary Oldman",
      "Natalie Portman",
      "Danny Aiello"
    ],
    "metaScore": 64,
    "votes": 1035236,
    "gross": "19,501,238",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 44,
    "title": "The Lion King",
    "genre": "Animation",
    "genres": [
      "Animation",
      "Adventure",
      "Drama"
    ],
    "rating": 8.5,
    "duration": "88 min",
    "year": 1994,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX500_.jpg",
    "director": "Roger Allers",
    "writer": "Curated top-rated cinema selection",
    "cast": "Rob Minkoff, Matthew Broderick, Jeremy Irons, James Earl Jones",
    "stars": [
      "Rob Minkoff",
      "Matthew Broderick",
      "Jeremy Irons",
      "James Earl Jones"
    ],
    "metaScore": 88,
    "votes": 942045,
    "gross": "422,783,777",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 45,
    "title": "Terminator 2: Judgment Day",
    "genre": "Action",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "duration": "137 min",
    "year": 1991,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "James Cameron",
    "writer": "Curated top-rated cinema selection",
    "cast": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
    "stars": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Edward Furlong",
      "Robert Patrick"
    ],
    "metaScore": 75,
    "votes": 995506,
    "gross": "204,843,350",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 46,
    "title": "Nuovo Cinema Paradiso",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Romance"
    ],
    "rating": 8.5,
    "duration": "155 min",
    "year": 1988,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UX500_.jpg",
    "director": "Giuseppe Tornatore",
    "writer": "Curated top-rated cinema selection",
    "cast": "Philippe Noiret, Enzo Cannavale, Antonella Attili, Isa Danieli",
    "stars": [
      "Philippe Noiret",
      "Enzo Cannavale",
      "Antonella Attili",
      "Isa Danieli"
    ],
    "metaScore": 80,
    "votes": 230763,
    "gross": "11,990,401",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 47,
    "title": "Hotaru no haka",
    "genre": "Animation",
    "genres": [
      "Animation",
      "Drama",
      "War"
    ],
    "rating": 8.5,
    "duration": "89 min",
    "year": 1988,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A young boy and his little sister struggle to survive in Japan during World War II.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX500_.jpg",
    "director": "Isao Takahata",
    "writer": "Curated top-rated cinema selection",
    "cast": "Tsutomu Tatsumi, Ayano Shiraishi, Akemi Yamaguchi, Yoshiko Shinohara",
    "stars": [
      "Tsutomu Tatsumi",
      "Ayano Shiraishi",
      "Akemi Yamaguchi",
      "Yoshiko Shinohara"
    ],
    "metaScore": 94,
    "votes": 235231,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 48,
    "title": "Back to the Future",
    "genre": "Adventure",
    "genres": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "duration": "116 min",
    "year": 1985,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX500_.jpg",
    "director": "Robert Zemeckis",
    "writer": "Curated top-rated cinema selection",
    "cast": "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
    "stars": [
      "Michael J. Fox",
      "Christopher Lloyd",
      "Lea Thompson",
      "Crispin Glover"
    ],
    "metaScore": 87,
    "votes": 1058081,
    "gross": "210,609,762",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 49,
    "title": "Once Upon a Time in the West",
    "genre": "Western",
    "genres": [
      "Western"
    ],
    "rating": 8.5,
    "duration": "165 min",
    "year": 1968,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Sergio Leone",
    "writer": "Curated top-rated cinema selection",
    "cast": "Henry Fonda, Charles Bronson, Claudia Cardinale, Jason Robards",
    "stars": [
      "Henry Fonda",
      "Charles Bronson",
      "Claudia Cardinale",
      "Jason Robards"
    ],
    "metaScore": 80,
    "votes": 302844,
    "gross": "5,321,508",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 50,
    "title": "Psycho",
    "genre": "Horror",
    "genres": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "rating": 8.5,
    "duration": "109 min",
    "year": 1960,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Alfred Hitchcock",
    "writer": "Curated top-rated cinema selection",
    "cast": "Anthony Perkins, Janet Leigh, Vera Miles, John Gavin",
    "stars": [
      "Anthony Perkins",
      "Janet Leigh",
      "Vera Miles",
      "John Gavin"
    ],
    "metaScore": 97,
    "votes": 604211,
    "gross": "32,000,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 51,
    "title": "Casablanca",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Romance",
      "War"
    ],
    "rating": 8.5,
    "duration": "102 min",
    "year": 1942,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX500_.jpg",
    "director": "Michael Curtiz",
    "writer": "Curated top-rated cinema selection",
    "cast": "Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains",
    "stars": [
      "Humphrey Bogart",
      "Ingrid Bergman",
      "Paul Henreid",
      "Claude Rains"
    ],
    "metaScore": 100,
    "votes": 522093,
    "gross": "1,024,560",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 52,
    "title": "Modern Times",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "Family"
    ],
    "rating": 8.5,
    "duration": "87 min",
    "year": 1936,
    "certificate": "G",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Charles Chaplin",
    "writer": "Curated top-rated cinema selection",
    "cast": "Charles Chaplin, Paulette Goddard, Henry Bergman, Tiny Sandford",
    "stars": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Henry Bergman",
      "Tiny Sandford"
    ],
    "metaScore": 96,
    "votes": 217881,
    "gross": "163,245",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 53,
    "title": "City Lights",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.5,
    "duration": "87 min",
    "year": 1931,
    "certificate": "G",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": "restored",
    "badgeLabel": "Restored",
    "description": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Charles Chaplin",
    "writer": "Curated top-rated cinema selection",
    "cast": "Charles Chaplin, Virginia Cherrill, Florence Lee, Harry Myers",
    "stars": [
      "Charles Chaplin",
      "Virginia Cherrill",
      "Florence Lee",
      "Harry Myers"
    ],
    "metaScore": 99,
    "votes": 167839,
    "gross": "19,181",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 54,
    "title": "Capharnaüm",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.4,
    "duration": "126 min",
    "year": 2018,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMmExNzU2ZWMtYzUwYi00YmM2LTkxZTQtNmVhNjY0NTMyMWI2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX500_.jpg",
    "director": "Nadine Labaki",
    "writer": "Curated top-rated cinema selection",
    "cast": "Zain Al Rafeea, Yordanos Shiferaw, Boluwatife Treasure Bankole, Kawsar Al Haddad",
    "stars": [
      "Zain Al Rafeea",
      "Yordanos Shiferaw",
      "Boluwatife Treasure Bankole",
      "Kawsar Al Haddad"
    ],
    "metaScore": 75,
    "votes": 62635,
    "gross": "1,661,096",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 55,
    "title": "Ayla: The Daughter of War",
    "genre": "Biography",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "rating": 8.4,
    "duration": "125 min",
    "year": 2017,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "In 1950, amid-st the ravages of the Korean War, Sergeant Süleyman stumbles upon a half-frozen little girl, with no parents and no help in sight. Frantic, scared and on the verge of death, ...                See full summary »",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNWJhMDlmZGUtYzcxNS00NDRiLWIwNjktNDY1Mjg3ZjBkYzY0XkEyXkFqcGdeQXVyMTU4MjUwMjI@._V1_UX500_.jpg",
    "director": "Can Ulkay",
    "writer": "Curated top-rated cinema selection",
    "cast": "Erdem Can, Çetin Tekindor, Ismail Hacioglu, Kyung-jin Lee",
    "stars": [
      "Erdem Can",
      "Çetin Tekindor",
      "Ismail Hacioglu",
      "Kyung-jin Lee"
    ],
    "metaScore": null,
    "votes": 34112,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 56,
    "title": "Kimi no na wa.",
    "genre": "Animation",
    "genres": [
      "Animation",
      "Drama",
      "Fantasy"
    ],
    "rating": 8.4,
    "duration": "106 min",
    "year": 2016,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UX500_.jpg",
    "director": "Makoto Shinkai",
    "writer": "Curated top-rated cinema selection",
    "cast": "Ryûnosuke Kamiki, Mone Kamishiraishi, Ryô Narita, Aoi Yûki",
    "stars": [
      "Ryûnosuke Kamiki",
      "Mone Kamishiraishi",
      "Ryô Narita",
      "Aoi Yûki"
    ],
    "metaScore": 79,
    "votes": 194838,
    "gross": "5,017,246",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 57,
    "title": "Spider-Man: Into the Spider-Verse",
    "genre": "Animation",
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "rating": 8.4,
    "duration": "117 min",
    "year": 2018,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UX500_.jpg",
    "director": "Bob Persichetti",
    "writer": "Curated top-rated cinema selection",
    "cast": "Peter Ramsey, Rodney Rothman, Shameik Moore, Jake Johnson",
    "stars": [
      "Peter Ramsey",
      "Rodney Rothman",
      "Shameik Moore",
      "Jake Johnson"
    ],
    "metaScore": 87,
    "votes": 375110,
    "gross": "190,241,310",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 58,
    "title": "Avengers: Endgame",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.4,
    "duration": "181 min",
    "year": 2019,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX500_.jpg",
    "director": "Anthony Russo",
    "writer": "Curated top-rated cinema selection",
    "cast": "Joe Russo, Robert Downey Jr., Chris Evans, Mark Ruffalo",
    "stars": [
      "Joe Russo",
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo"
    ],
    "metaScore": 78,
    "votes": 809955,
    "gross": "858,373,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 59,
    "title": "Avengers: Infinity War",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 8.4,
    "duration": "149 min",
    "year": 2018,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX500_.jpg",
    "director": "Anthony Russo",
    "writer": "Curated top-rated cinema selection",
    "cast": "Joe Russo, Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
    "stars": [
      "Joe Russo",
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo"
    ],
    "metaScore": 68,
    "votes": 834477,
    "gross": "678,815,482",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 60,
    "title": "Coco",
    "genre": "Animation",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "rating": 8.4,
    "duration": "105 min",
    "year": 2017,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UX500_.jpg",
    "director": "Lee Unkrich",
    "writer": "Curated top-rated cinema selection",
    "cast": "Adrian Molina, Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
    "stars": [
      "Adrian Molina",
      "Anthony Gonzalez",
      "Gael García Bernal",
      "Benjamin Bratt"
    ],
    "metaScore": 81,
    "votes": 384171,
    "gross": "209,726,015",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 61,
    "title": "Django Unchained",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Western"
    ],
    "rating": 8.4,
    "duration": "165 min",
    "year": 2012,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX500_.jpg",
    "director": "Quentin Tarantino",
    "writer": "Curated top-rated cinema selection",
    "cast": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
    "stars": [
      "Jamie Foxx",
      "Christoph Waltz",
      "Leonardo DiCaprio",
      "Kerry Washington"
    ],
    "metaScore": 81,
    "votes": 1357682,
    "gross": "162,805,434",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 62,
    "title": "The Dark Knight Rises",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure"
    ],
    "rating": 8.4,
    "duration": "164 min",
    "year": 2012,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX500_.jpg",
    "director": "Christopher Nolan",
    "writer": "Curated top-rated cinema selection",
    "cast": "Christian Bale, Tom Hardy, Anne Hathaway, Gary Oldman",
    "stars": [
      "Christian Bale",
      "Tom Hardy",
      "Anne Hathaway",
      "Gary Oldman"
    ],
    "metaScore": 78,
    "votes": 1516346,
    "gross": "448,139,099",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 63,
    "title": "WALL·E",
    "genre": "Animation",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "rating": 8.4,
    "duration": "98 min",
    "year": 2008,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UX500_.jpg",
    "director": "Andrew Stanton",
    "writer": "Curated top-rated cinema selection",
    "cast": "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
    "stars": [
      "Ben Burtt",
      "Elissa Knight",
      "Jeff Garlin",
      "Fred Willard"
    ],
    "metaScore": 95,
    "votes": 999790,
    "gross": "223,808,164",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 64,
    "title": "The Lives of Others",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "rating": 8.4,
    "duration": "137 min",
    "year": 2006,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOThkM2EzYmMtNDE3NS00NjlhLTg4YzktYTdhNzgyOWY3ZDYzXkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_UX500_.jpg",
    "director": "Florian Henckel von Donnersmarck",
    "writer": "Curated top-rated cinema selection",
    "cast": "Ulrich Mühe, Martina Gedeck, Sebastian Koch, Ulrich Tukur",
    "stars": [
      "Ulrich Mühe",
      "Martina Gedeck",
      "Sebastian Koch",
      "Ulrich Tukur"
    ],
    "metaScore": 89,
    "votes": 358685,
    "gross": "11,286,112",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 65,
    "title": "Oldeuboi",
    "genre": "Action",
    "genres": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "rating": 8.4,
    "duration": "101 min",
    "year": 2003,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX500_.jpg",
    "director": "Chan-wook Park",
    "writer": "Curated top-rated cinema selection",
    "cast": "Choi Min-sik, Yoo Ji-Tae, Kang Hye-jeong, Kim Byeong-Ok",
    "stars": [
      "Choi Min-sik",
      "Yoo Ji-Tae",
      "Kang Hye-jeong",
      "Kim Byeong-Ok"
    ],
    "metaScore": 77,
    "votes": 515451,
    "gross": "707,481",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 66,
    "title": "Memento",
    "genre": "Mystery",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "rating": 8.4,
    "duration": "113 min",
    "year": 2000,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "restored",
    "badgeLabel": "Restored",
    "description": "A man with short-term memory loss attempts to track down his wife's murderer.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Christopher Nolan",
    "writer": "Curated top-rated cinema selection",
    "cast": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
    "stars": [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano",
      "Mark Boone Junior"
    ],
    "metaScore": 80,
    "votes": 1125712,
    "gross": "25,544,867",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 67,
    "title": "Mononoke-hime",
    "genre": "Animation",
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "rating": 8.4,
    "duration": "134 min",
    "year": 1997,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX500_.jpg",
    "director": "Hayao Miyazaki",
    "writer": "Curated top-rated cinema selection",
    "cast": "Yôji Matsuda, Yuriko Ishida, Yûko Tanaka, Billy Crudup",
    "stars": [
      "Yôji Matsuda",
      "Yuriko Ishida",
      "Yûko Tanaka",
      "Billy Crudup"
    ],
    "metaScore": 76,
    "votes": 343171,
    "gross": "2,375,308",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 68,
    "title": "Once Upon a Time in America",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama"
    ],
    "rating": 8.4,
    "duration": "229 min",
    "year": 1984,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Sergio Leone",
    "writer": "Curated top-rated cinema selection",
    "cast": "Robert De Niro, James Woods, Elizabeth McGovern, Treat Williams",
    "stars": [
      "Robert De Niro",
      "James Woods",
      "Elizabeth McGovern",
      "Treat Williams"
    ],
    "metaScore": null,
    "votes": 311365,
    "gross": "5,321,508",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 69,
    "title": "Raiders of the Lost Ark",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure"
    ],
    "rating": 8.4,
    "duration": "115 min",
    "year": 1981,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_UX500_.jpg",
    "director": "Steven Spielberg",
    "writer": "Curated top-rated cinema selection",
    "cast": "Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies",
    "stars": [
      "Harrison Ford",
      "Karen Allen",
      "Paul Freeman",
      "John Rhys-Davies"
    ],
    "metaScore": 85,
    "votes": 884112,
    "gross": "248,159,971",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 70,
    "title": "The Shining",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Horror"
    ],
    "rating": 8.4,
    "duration": "146 min",
    "year": 1980,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX500_.jpg",
    "director": "Stanley Kubrick",
    "writer": "Curated top-rated cinema selection",
    "cast": "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
    "stars": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Danny Lloyd",
      "Scatman Crothers"
    ],
    "metaScore": 66,
    "votes": 898237,
    "gross": "44,017,374",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 71,
    "title": "Apocalypse Now",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Mystery",
      "War"
    ],
    "rating": 8.4,
    "duration": "147 min",
    "year": 1979,
    "certificate": "R",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Francis Ford Coppola",
    "writer": "Curated top-rated cinema selection",
    "cast": "Martin Sheen, Marlon Brando, Robert Duvall, Frederic Forrest",
    "stars": [
      "Martin Sheen",
      "Marlon Brando",
      "Robert Duvall",
      "Frederic Forrest"
    ],
    "metaScore": 94,
    "votes": 606398,
    "gross": "83,471,511",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 72,
    "title": "Alien",
    "genre": "Horror",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "rating": 8.4,
    "duration": "117 min",
    "year": 1979,
    "certificate": "R",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Ridley Scott",
    "writer": "Curated top-rated cinema selection",
    "cast": "Sigourney Weaver, Tom Skerritt, John Hurt, Veronica Cartwright",
    "stars": [
      "Sigourney Weaver",
      "Tom Skerritt",
      "John Hurt",
      "Veronica Cartwright"
    ],
    "metaScore": 89,
    "votes": 787806,
    "gross": "78,900,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 73,
    "title": "Anand",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Musical"
    ],
    "rating": 8.4,
    "duration": "122 min",
    "year": 1971,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "The story of a terminally ill man who wishes to live life to the fullest before the inevitable occurs, as told by his best friend.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYmYzNmM2MDctZGY3Yi00NjRiLWIxZjctYjgzYTcxYTNhYTMyXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UX500_.jpg",
    "director": "Hrishikesh Mukherjee",
    "writer": "Curated top-rated cinema selection",
    "cast": "Rajesh Khanna, Amitabh Bachchan, Sumita Sanyal, Ramesh Deo",
    "stars": [
      "Rajesh Khanna",
      "Amitabh Bachchan",
      "Sumita Sanyal",
      "Ramesh Deo"
    ],
    "metaScore": null,
    "votes": 30273,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 74,
    "title": "Tengoku to jigoku",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "rating": 8.4,
    "duration": "143 min",
    "year": 1963,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "An executive of a shoe company becomes a victim of extortion when his chauffeur's son is kidnapped and held for ransom.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTI4NTNhZDMtMWNkZi00MTRmLWJmZDQtMmJkMGVmZTEzODlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX500_.jpg",
    "director": "Akira Kurosawa",
    "writer": "Curated top-rated cinema selection",
    "cast": "Toshirô Mifune, Yutaka Sada, Tatsuya Nakadai, Kyôko Kagawa",
    "stars": [
      "Toshirô Mifune",
      "Yutaka Sada",
      "Tatsuya Nakadai",
      "Kyôko Kagawa"
    ],
    "metaScore": null,
    "votes": 34357,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 75,
    "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "genre": "Comedy",
    "genres": [
      "Comedy"
    ],
    "rating": 8.4,
    "duration": "95 min",
    "year": 1964,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX500_.jpg",
    "director": "Stanley Kubrick",
    "writer": "Curated top-rated cinema selection",
    "cast": "Peter Sellers, George C. Scott, Sterling Hayden, Keenan Wynn",
    "stars": [
      "Peter Sellers",
      "George C. Scott",
      "Sterling Hayden",
      "Keenan Wynn"
    ],
    "metaScore": 97,
    "votes": 450474,
    "gross": "275,902",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 76,
    "title": "Witness for the Prosecution",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "rating": 8.4,
    "duration": "116 min",
    "year": 1957,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX500_.jpg",
    "director": "Billy Wilder",
    "writer": "Curated top-rated cinema selection",
    "cast": "Tyrone Power, Marlene Dietrich, Charles Laughton, Elsa Lanchester",
    "stars": [
      "Tyrone Power",
      "Marlene Dietrich",
      "Charles Laughton",
      "Elsa Lanchester"
    ],
    "metaScore": null,
    "votes": 108862,
    "gross": "8,175,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 77,
    "title": "Paths of Glory",
    "genre": "Drama",
    "genres": [
      "Drama",
      "War"
    ],
    "rating": 8.4,
    "duration": "88 min",
    "year": 1957,
    "certificate": "A",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX500_.jpg",
    "director": "Stanley Kubrick",
    "writer": "Curated top-rated cinema selection",
    "cast": "Kirk Douglas, Ralph Meeker, Adolphe Menjou, George Macready",
    "stars": [
      "Kirk Douglas",
      "Ralph Meeker",
      "Adolphe Menjou",
      "George Macready"
    ],
    "metaScore": 90,
    "votes": 178092,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 78,
    "title": "Rear Window",
    "genre": "Mystery",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "rating": 8.4,
    "duration": "112 min",
    "year": 1954,
    "certificate": "U",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX500_.jpg",
    "director": "Alfred Hitchcock",
    "writer": "Curated top-rated cinema selection",
    "cast": "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
    "stars": [
      "James Stewart",
      "Grace Kelly",
      "Wendell Corey",
      "Thelma Ritter"
    ],
    "metaScore": 100,
    "votes": 444074,
    "gross": "36,764,313",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 79,
    "title": "Sunset Blvd.",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Film-Noir"
    ],
    "rating": 8.4,
    "duration": "110 min",
    "year": 1950,
    "certificate": "Passed",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": "restored",
    "badgeLabel": "Restored",
    "description": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_UX500_.jpg",
    "director": "Billy Wilder",
    "writer": "Curated top-rated cinema selection",
    "cast": "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
    "stars": [
      "William Holden",
      "Gloria Swanson",
      "Erich von Stroheim",
      "Nancy Olson"
    ],
    "metaScore": null,
    "votes": 201632,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 80,
    "title": "The Great Dictator",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "War"
    ],
    "rating": 8.4,
    "duration": "125 min",
    "year": 1940,
    "certificate": "Passed",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Charles Chaplin",
    "writer": "Curated top-rated cinema selection",
    "cast": "Charles Chaplin, Paulette Goddard, Jack Oakie, Reginald Gardiner",
    "stars": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Jack Oakie",
      "Reginald Gardiner"
    ],
    "metaScore": null,
    "votes": 203150,
    "gross": "288,475",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 81,
    "title": "1917",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Thriller",
      "War"
    ],
    "rating": 8.3,
    "duration": "119 min",
    "year": 2019,
    "certificate": "R",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX500_.jpg",
    "director": "Sam Mendes",
    "writer": "Curated top-rated cinema selection",
    "cast": "Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth",
    "stars": [
      "Dean-Charles Chapman",
      "George MacKay",
      "Daniel Mays",
      "Colin Firth"
    ],
    "metaScore": 78,
    "votes": 425844,
    "gross": "159,227,644",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 82,
    "title": "Jagten",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.3,
    "duration": "115 min",
    "year": 2012,
    "certificate": "R",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_UX500_.jpg",
    "director": "Thomas Vinterberg",
    "writer": "Curated top-rated cinema selection",
    "cast": "Mads Mikkelsen, Thomas Bo Larsen, Annika Wedderkopp, Lasse Fogelstrøm",
    "stars": [
      "Mads Mikkelsen",
      "Thomas Bo Larsen",
      "Annika Wedderkopp",
      "Lasse Fogelstrøm"
    ],
    "metaScore": 77,
    "votes": 281623,
    "gross": "687,185",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 83,
    "title": "Jodaeiye Nader az Simin",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.3,
    "duration": "123 min",
    "year": 2011,
    "certificate": "PG-13",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BN2JmMjViMjMtZTM5Mi00ZGZkLTk5YzctZDg5MjFjZDE4NjNkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX500_.jpg",
    "director": "Asghar Farhadi",
    "writer": "Curated top-rated cinema selection",
    "cast": "Payman Maadi, Leila Hatami, Sareh Bayat, Shahab Hosseini",
    "stars": [
      "Payman Maadi",
      "Leila Hatami",
      "Sareh Bayat",
      "Shahab Hosseini"
    ],
    "metaScore": 95,
    "votes": 220002,
    "gross": "7,098,492",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 84,
    "title": "Incendies",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Mystery",
      "War"
    ],
    "rating": 8.3,
    "duration": "131 min",
    "year": 2010,
    "certificate": "R",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Twins journey to the Middle East to discover their family history and fulfill their mother's last wishes.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMWE3MGYzZjktY2Q5Mi00Y2NiLWIyYWUtMmIyNzA3YmZlMGFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX500_.jpg",
    "director": "Denis Villeneuve",
    "writer": "Curated top-rated cinema selection",
    "cast": "Lubna Azabal, Mélissa Désormeaux-Poulin, Maxim Gaudette, Mustafa Kamel",
    "stars": [
      "Lubna Azabal",
      "Mélissa Désormeaux-Poulin",
      "Maxim Gaudette",
      "Mustafa Kamel"
    ],
    "metaScore": 80,
    "votes": 150023,
    "gross": "6,857,096",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 85,
    "title": "Miracle in cell NO.7",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.3,
    "duration": "132 min",
    "year": 2019,
    "certificate": "TV-14",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A story of love between a mentally-ill father who was wrongly accused of murder and his lovely six years old daughter. The prison would be their home. Based on the 2013 Korean movie 7-beon-bang-ui seon-mul (2013).",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOGE3N2QxN2YtM2ZlNS00MWIyLWE1NDAtYWFlN2FiYjY1MjczXkEyXkFqcGdeQXVyOTUwNzc0ODc@._V1_UX500_.jpg",
    "director": "Mehmet Ada Öztekin",
    "writer": "Curated top-rated cinema selection",
    "cast": "Aras Bulut Iynemli, Nisa Sofiya Aksongur, Deniz Baysal, Celile Toyon Uysal",
    "stars": [
      "Aras Bulut Iynemli",
      "Nisa Sofiya Aksongur",
      "Deniz Baysal",
      "Celile Toyon Uysal"
    ],
    "metaScore": null,
    "votes": 33935,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 86,
    "title": "Babam ve Oglum",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Family"
    ],
    "rating": 8.3,
    "duration": "112 min",
    "year": 2005,
    "certificate": "UA",
    "lang": "Global Cinema",
    "region": "Global",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "The family of a left-wing journalist is torn apart after the military coup of Turkey in 1980.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNjAzMzEwYzctNjc1MC00Nzg5LWFmMGItMTgzYmMyNTY2OTQ4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Çagan Irmak",
    "writer": "Curated top-rated cinema selection",
    "cast": "Çetin Tekindor, Fikret Kuskan, Hümeyra, Ege Tanman",
    "stars": [
      "Çetin Tekindor",
      "Fikret Kuskan",
      "Hümeyra",
      "Ege Tanman"
    ],
    "metaScore": null,
    "votes": 78925,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 87,
    "title": "Vikram Vedha",
    "genre": "Action",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "rating": 8.4,
    "duration": "147 min",
    "year": 2017,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Vikram, a no-nonsense police officer, accompanied by Simon, his partner, is on the hunt to capture Vedha, a smuggler and a murderer. Vedha tries to change Vikram's life, which leads to a conflict.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BY2FiMTFmMzMtZDI2ZC00NDQyLWExYTUtOWNmZWM1ZDg5YjVjXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_UX500_.jpg",
    "director": "Gayatri",
    "writer": "Curated top-rated cinema selection",
    "cast": "Pushkar, Madhavan, Vijay Sethupathi, Shraddha Srinath",
    "stars": [
      "Pushkar",
      "Madhavan",
      "Vijay Sethupathi",
      "Shraddha Srinath"
    ],
    "metaScore": null,
    "votes": 28401,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 88,
    "title": "Dangal",
    "genre": "Action",
    "genres": [
      "Action",
      "Biography",
      "Drama"
    ],
    "rating": 8.4,
    "duration": "161 min",
    "year": 2016,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_UX500_.jpg",
    "director": "Nitesh Tiwari",
    "writer": "Curated top-rated cinema selection",
    "cast": "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra",
    "stars": [
      "Aamir Khan",
      "Sakshi Tanwar",
      "Fatima Sana Shaikh",
      "Sanya Malhotra"
    ],
    "metaScore": null,
    "votes": 156479,
    "gross": "12,391,761",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 89,
    "title": "3 Idiots",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "rating": 8.4,
    "duration": "170 min",
    "year": 2009,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\".",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Rajkumar Hirani",
    "writer": "Curated top-rated cinema selection",
    "cast": "Aamir Khan, Madhavan, Mona Singh, Sharman Joshi",
    "stars": [
      "Aamir Khan",
      "Madhavan",
      "Mona Singh",
      "Sharman Joshi"
    ],
    "metaScore": 67,
    "votes": 344445,
    "gross": "6,532,908",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 90,
    "title": "Taare Zameen Par",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Family"
    ],
    "rating": 8.4,
    "duration": "165 min",
    "year": 2007,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMDhjZWViN2MtNzgxOS00NmI4LThiZDQtZDI3MzM4MDE4NTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX500_.jpg",
    "director": "Aamir Khan",
    "writer": "Curated top-rated cinema selection",
    "cast": "Amole Gupte, Darsheel Safary, Aamir Khan, Tisca Chopra",
    "stars": [
      "Amole Gupte",
      "Darsheel Safary",
      "Aamir Khan",
      "Tisca Chopra"
    ],
    "metaScore": null,
    "votes": 168895,
    "gross": "1,223,869",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 91,
    "title": "Tumbbad",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Fantasy",
      "Horror"
    ],
    "rating": 8.3,
    "duration": "104 min",
    "year": 2018,
    "certificate": "A",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYmQxNmU4ZjgtYzE5Mi00ZDlhLTlhOTctMzJkNjk2ZGUyZGEwXkEyXkFqcGdeQXVyMzgxMDA0Nzk@._V1_UX500_.jpg",
    "director": "Rahi Anil Barve",
    "writer": "Curated top-rated cinema selection",
    "cast": "Anand Gandhi, Adesh Prasad, Sohum Shah, Jyoti Malshe",
    "stars": [
      "Anand Gandhi",
      "Adesh Prasad",
      "Sohum Shah",
      "Jyoti Malshe"
    ],
    "metaScore": null,
    "votes": 27793,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 92,
    "title": "Andhadhun",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Music"
    ],
    "rating": 8.3,
    "duration": "139 min",
    "year": 2018,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": "restored",
    "badgeLabel": "Restored",
    "description": "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing of.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BZWZhMjhhZmYtOTIzOC00MGYzLWI1OGYtM2ZkN2IxNTI4ZWI3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_UX500_.jpg",
    "director": "Sriram Raghavan",
    "writer": "Curated top-rated cinema selection",
    "cast": "Ayushmann Khurrana, Tabu, Radhika Apte, Anil Dhawan",
    "stars": [
      "Ayushmann Khurrana",
      "Tabu",
      "Radhika Apte",
      "Anil Dhawan"
    ],
    "metaScore": null,
    "votes": 71875,
    "gross": "1,373,943",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 93,
    "title": "Drishyam",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8.3,
    "duration": "160 min",
    "year": 2013,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A man goes to extreme lengths to save his family from punishment after the family commits an accidental crime.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UX500_.jpg",
    "director": "Jeethu Joseph",
    "writer": "Curated top-rated cinema selection",
    "cast": "Mohanlal, Meena, Asha Sharath, Ansiba",
    "stars": [
      "Mohanlal",
      "Meena",
      "Asha Sharath",
      "Ansiba"
    ],
    "metaScore": null,
    "votes": 30722,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 94,
    "title": "Talvar",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "rating": 8.2,
    "duration": "132 min",
    "year": 2015,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "An experienced investigator confronts several conflicting theories about the perpetrators of a violent double homicide.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYzODg0Mjc4M15BMl5BanBnXkFtZTgwNzY4Mzc3NjE@._V1_UX500_.jpg",
    "director": "Meghna Gulzar",
    "writer": "Curated top-rated cinema selection",
    "cast": "Irrfan Khan, Konkona Sen Sharma, Neeraj Kabi, Sohum Shah",
    "stars": [
      "Irrfan Khan",
      "Konkona Sen Sharma",
      "Neeraj Kabi",
      "Sohum Shah"
    ],
    "metaScore": null,
    "votes": 31142,
    "gross": "342,370",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 95,
    "title": "Queen",
    "genre": "Adventure",
    "genres": [
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "rating": 8.2,
    "duration": "146 min",
    "year": 2013,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNWYyOWRlOWItZWM5MS00ZjJkLWI0MTUtYTE3NTI5MDAwYjgyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX500_.jpg",
    "director": "Vikas Bahl",
    "writer": "Curated top-rated cinema selection",
    "cast": "Kangana Ranaut, Rajkummar Rao, Lisa Haydon, Jeffrey Ho",
    "stars": [
      "Kangana Ranaut",
      "Rajkummar Rao",
      "Lisa Haydon",
      "Jeffrey Ho"
    ],
    "metaScore": null,
    "votes": 60701,
    "gross": "1,429,534",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 96,
    "title": "Gangs of Wasseypur",
    "genre": "Action",
    "genres": [
      "Action",
      "Comedy",
      "Crime"
    ],
    "rating": 8.2,
    "duration": "321 min",
    "year": 2012,
    "certificate": "A",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTc5NjY4MjUwNF5BMl5BanBnXkFtZTgwODM3NzM5MzE@._V1_UX500_.jpg",
    "director": "Anurag Kashyap",
    "writer": "Curated top-rated cinema selection",
    "cast": "Manoj Bajpayee, Richa Chadha, Nawazuddin Siddiqui, Tigmanshu Dhulia",
    "stars": [
      "Manoj Bajpayee",
      "Richa Chadha",
      "Nawazuddin Siddiqui",
      "Tigmanshu Dhulia"
    ],
    "metaScore": 89,
    "votes": 82365,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 97,
    "title": "Udaan",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.2,
    "duration": "134 min",
    "year": 2010,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Expelled from his school, a 16-year old boy returns home to his abusive and oppressive father.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNzgxMzExMzUwNV5BMl5BanBnXkFtZTcwMDc2MjUwNA@@._V1_UX500_.jpg",
    "director": "Vikramaditya Motwane",
    "writer": "Curated top-rated cinema selection",
    "cast": "Rajat Barmecha, Ronit Roy, Manjot Singh, Ram Kapoor",
    "stars": [
      "Rajat Barmecha",
      "Ronit Roy",
      "Manjot Singh",
      "Ram Kapoor"
    ],
    "metaScore": null,
    "votes": 42341,
    "gross": "7,461",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 98,
    "title": "Chak De! India",
    "genre": "Drama",
    "genres": [
      "Drama",
      "Family",
      "Sport"
    ],
    "rating": 8.2,
    "duration": "153 min",
    "year": 2007,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Kabir Khan is the coach of the Indian Women's National Hockey Team and his dream is to make his all girls team emerge victorious against all odds.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTUzODMyNzk4NV5BMl5BanBnXkFtZTgwNTk1NTYyNTM@._V1_UX500_.jpg",
    "director": "Shimit Amin",
    "writer": "Curated top-rated cinema selection",
    "cast": "Shah Rukh Khan, Vidya Malvade, Sagarika Ghatge, Shilpa Shukla",
    "stars": [
      "Shah Rukh Khan",
      "Vidya Malvade",
      "Sagarika Ghatge",
      "Shilpa Shukla"
    ],
    "metaScore": 68,
    "votes": 74129,
    "gross": "1,113,541",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 99,
    "title": "Rang De Basanti",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "rating": 8.2,
    "duration": "167 min",
    "year": 2006,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "The story of six young Indians who assist an English woman to film a documentary on the freedom fighters from their past, and the events that lead them to relive the long-forgotten saga of freedom.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYThmZDA0YmQtMWJhNy00MDQwLTk0Y2YtMDhmZTE5ZjhlNjliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX500_.jpg",
    "director": "Rakeysh Omprakash Mehra",
    "writer": "Curated top-rated cinema selection",
    "cast": "Aamir Khan, Soha Ali Khan, Siddharth, Sharman Joshi",
    "stars": [
      "Aamir Khan",
      "Soha Ali Khan",
      "Siddharth",
      "Sharman Joshi"
    ],
    "metaScore": null,
    "votes": 111937,
    "gross": "2,197,331",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 100,
    "title": "Swades: We, the People",
    "genre": "Drama",
    "genres": [
      "Drama"
    ],
    "rating": 8.2,
    "duration": "210 min",
    "year": 2004,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "A successful Indian scientist returns to an Indian village to take his nanny to America with him and in the process rediscovers his roots.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BYzExOTcwNjYtZTljMC00YTQ2LWI2YjYtNWFlYzQ0YTJhNzJmXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX500_.jpg",
    "director": "Ashutosh Gowariker",
    "writer": "Curated top-rated cinema selection",
    "cast": "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal, Smit Sheth",
    "stars": [
      "Shah Rukh Khan",
      "Gayatri Joshi",
      "Kishori Ballal",
      "Smit Sheth"
    ],
    "metaScore": null,
    "votes": 83005,
    "gross": "1,223,240",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 101,
    "title": "Sholay",
    "genre": "Action",
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "rating": 8.2,
    "duration": "204 min",
    "year": 1975,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOGZiM2IwODktNTdiMC00MGU1LWEyZTYtOTk4NTkwYmJkNmI1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Ramesh Sippy",
    "writer": "Curated top-rated cinema selection",
    "cast": "Sanjeev Kumar, Dharmendra, Amitabh Bachchan, Amjad Khan",
    "stars": [
      "Sanjeev Kumar",
      "Dharmendra",
      "Amitabh Bachchan",
      "Amjad Khan"
    ],
    "metaScore": null,
    "votes": 51284,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 102,
    "title": "Haider",
    "genre": "Action",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "rating": 8.1,
    "duration": "160 min",
    "year": 2014,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A young man returns to Kashmir after his father's disappearance to confront his uncle, whom he suspects of playing a role in his father's fate.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjA1NTEwMDMxMF5BMl5BanBnXkFtZTgwODkzMzI0MjE@._V1_UX500_.jpg",
    "director": "Vishal Bhardwaj",
    "writer": "Curated top-rated cinema selection",
    "cast": "Shahid Kapoor, Tabu, Shraddha Kapoor, Kay Kay Menon",
    "stars": [
      "Shahid Kapoor",
      "Tabu",
      "Shraddha Kapoor",
      "Kay Kay Menon"
    ],
    "metaScore": null,
    "votes": 50445,
    "gross": "901,610",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 103,
    "title": "PK",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "Musical"
    ],
    "rating": 8.1,
    "duration": "153 min",
    "year": 2014,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate the impact of religion on its people.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_UX500_.jpg",
    "director": "Rajkumar Hirani",
    "writer": "Curated top-rated cinema selection",
    "cast": "Aamir Khan, Anushka Sharma, Sanjay Dutt, Boman Irani",
    "stars": [
      "Aamir Khan",
      "Anushka Sharma",
      "Sanjay Dutt",
      "Boman Irani"
    ],
    "metaScore": null,
    "votes": 163061,
    "gross": "10,616,104",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "10:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 104,
    "title": "Barfi!",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.1,
    "duration": "151 min",
    "year": 2012,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Three young people learn that love can neither be defined nor contained by society's definition of normal and abnormal.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQzMTEyODY2Ml5BMl5BanBnXkFtZTgwMjA0MDUyMjE@._V1_UX500_.jpg",
    "director": "Anurag Basu",
    "writer": "Curated top-rated cinema selection",
    "cast": "Ranbir Kapoor, Priyanka Chopra, Ileana D'Cruz, Saurabh Shukla",
    "stars": [
      "Ranbir Kapoor",
      "Priyanka Chopra",
      "Ileana D'Cruz",
      "Saurabh Shukla"
    ],
    "metaScore": null,
    "votes": 75721,
    "gross": "2,804,874",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "10:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 105,
    "title": "Kahaani",
    "genre": "Mystery",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "rating": 8.1,
    "duration": "122 min",
    "year": 2012,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": "restored",
    "badgeLabel": "Restored",
    "description": "A pregnant woman's search for her missing husband takes her from London to Kolkata, but everyone she questions denies having ever met him.",
    "price": {
      "standard": 340,
      "premium": 480,
      "recliner": 660
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1NDI0NzkyOF5BMl5BanBnXkFtZTcwNzAyNzE2Nw@@._V1_UX500_.jpg",
    "director": "Sujoy Ghosh",
    "writer": "Curated top-rated cinema selection",
    "cast": "Vidya Balan, Parambrata Chattopadhyay, Indraneil Sengupta, Nawazuddin Siddiqui",
    "stars": [
      "Vidya Balan",
      "Parambrata Chattopadhyay",
      "Indraneil Sengupta",
      "Nawazuddin Siddiqui"
    ],
    "metaScore": null,
    "votes": 57806,
    "gross": "1,035,953",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "5:00 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 106,
    "title": "A Wednesday",
    "genre": "Action",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "rating": 8.1,
    "duration": "104 min",
    "year": 2008,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A retiring police officer reminisces about the most astounding day of his career. About a case that was never filed but continues to haunt him in his memories - the case of a man and a Wednesday.",
    "price": {
      "standard": 220,
      "premium": 360,
      "recliner": 540
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BOTcwMzdiMWItMjZlOS00MzAzLTg5OTItNTA4OGYyMjBhMmRiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX500_.jpg",
    "director": "Neeraj Pandey",
    "writer": "Curated top-rated cinema selection",
    "cast": "Anupam Kher, Naseeruddin Shah, Jimmy Sheirgill, Aamir Bashir",
    "stars": [
      "Anupam Kher",
      "Naseeruddin Shah",
      "Jimmy Sheirgill",
      "Aamir Bashir"
    ],
    "metaScore": null,
    "votes": 73891,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "2:20 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 107,
    "title": "Munna Bhai M.B.B.S.",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "Musical"
    ],
    "rating": 8.1,
    "duration": "156 min",
    "year": 2003,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A gangster sets out to fulfill his father's dream of becoming a doctor.",
    "price": {
      "standard": 240,
      "premium": 380,
      "recliner": 560
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMzQ4MTBlYTQtMzJkYS00OGNjLTk1MWYtNzQ0OTQ0OWEyOWU1XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_UX500_.jpg",
    "director": "Rajkumar Hirani",
    "writer": "Curated top-rated cinema selection",
    "cast": "Sanjay Dutt, Arshad Warsi, Gracy Singh, Sunil Dutt",
    "stars": [
      "Sanjay Dutt",
      "Arshad Warsi",
      "Gracy Singh",
      "Sunil Dutt"
    ],
    "metaScore": null,
    "votes": 73992,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:50 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "IMAX",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 108,
    "title": "Dil Chahta Hai",
    "genre": "Comedy",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.1,
    "duration": "183 min",
    "year": 2001,
    "certificate": "Unrated",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "4DX",
      "IMAX",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love, and their wildly different approaches to relationships creates tension.",
    "price": {
      "standard": 260,
      "premium": 400,
      "recliner": 580
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMjRjMTYwMTYtMmRkNi00MmVkLWE0MjQtNmM3YjI0NWFhZDNmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX500_.jpg",
    "director": "Farhan Akhtar",
    "writer": "Curated top-rated cinema selection",
    "cast": "Aamir Khan, Saif Ali Khan, Akshaye Khanna, Preity Zinta",
    "stars": [
      "Aamir Khan",
      "Saif Ali Khan",
      "Akshaye Khanna",
      "Preity Zinta"
    ],
    "metaScore": null,
    "votes": 66803,
    "gross": "300,000",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "7:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "IMAX",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "IMAX",
            "soldOut": true
          }
        ]
      }
    ]
  },
  {
    "id": 109,
    "title": "Lagaan: Once Upon a Time in India",
    "genre": "Adventure",
    "genres": [
      "Adventure",
      "Drama",
      "Musical"
    ],
    "rating": 8.1,
    "duration": "224 min",
    "year": 2001,
    "certificate": "U",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Director Cut",
      "Dolby",
      "Standard"
    ],
    "badge": "festival",
    "badgeLabel": "Festival",
    "description": "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    "price": {
      "standard": 280,
      "premium": 420,
      "recliner": 600
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX500_.jpg",
    "director": "Ashutosh Gowariker",
    "writer": "Curated top-rated cinema selection",
    "cast": "Aamir Khan, Raghuvir Yadav, Gracy Singh, Rachel Shelley",
    "stars": [
      "Aamir Khan",
      "Raghuvir Yadav",
      "Gracy Singh",
      "Rachel Shelley"
    ],
    "metaScore": 84,
    "votes": 105036,
    "gross": "70,147",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "1:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 110,
    "title": "Airlift",
    "genre": "Drama",
    "genres": [
      "Drama",
      "History"
    ],
    "rating": 8,
    "duration": "130 min",
    "year": 2016,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "Classic Screen",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "When Iraq invades Kuwait in August 1990, a callous Indian businessman becomes the spokesperson for more than 170,000 stranded countrymen.",
    "price": {
      "standard": 300,
      "premium": 440,
      "recliner": 620
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMGE1ZTkyOTMtMTdiZS00YzI2LTlmYWQtOTE5YWY0NWVlNjlmXkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_UX500_.jpg",
    "director": "Raja Menon",
    "writer": "Curated top-rated cinema selection",
    "cast": "Akshay Kumar, Nimrat Kaur, Kumud Mishra, Prakash Belawadi",
    "stars": [
      "Akshay Kumar",
      "Nimrat Kaur",
      "Kumud Mishra",
      "Prakash Belawadi"
    ],
    "metaScore": null,
    "votes": 52897,
    "gross": null,
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "11:00 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "2:20 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "6:05 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "9:30 PM",
            "format": "4DX",
            "soldOut": true
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "4DX",
            "soldOut": false
          }
        ]
      }
    ]
  },
  {
    "id": 111,
    "title": "Special Chabbis",
    "genre": "Crime",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8,
    "duration": "144 min",
    "year": 2013,
    "certificate": "UA",
    "lang": "Indian Cinema",
    "region": "India",
    "formats": [
      "IMAX",
      "Dolby Atmos",
      "Standard"
    ],
    "badge": null,
    "badgeLabel": null,
    "description": "A gang of con-men rob prominent rich businessmen and politicians by posing as C.B.I and income tax officers.",
    "price": {
      "standard": 320,
      "premium": 460,
      "recliner": 640
    },
    "poster": "https://m.media-amazon.com/images/M/MV5BMTQ1NDI5MjMzNF5BMl5BanBnXkFtZTcwMTc0MDQwOQ@@._V1_UX500_.jpg",
    "director": "Neeraj Pandey",
    "writer": "Curated top-rated cinema selection",
    "cast": "Akshay Kumar, Anupam Kher, Manoj Bajpayee, Jimmy Sheirgill",
    "stars": [
      "Akshay Kumar",
      "Anupam Kher",
      "Manoj Bajpayee",
      "Jimmy Sheirgill"
    ],
    "metaScore": null,
    "votes": 51069,
    "gross": "1,079,369",
    "showDates": [
      {
        "key": "Today",
        "label": "Today",
        "dayOffset": 0,
        "slots": [
          {
            "time": "9:45 AM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "12:55 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "4:25 PM",
            "format": "4DX",
            "soldOut": true
          },
          {
            "time": "7:50 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "10:45 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Tomorrow",
        "label": "Tomorrow",
        "dayOffset": 1,
        "slots": [
          {
            "time": "12:10 PM",
            "format": "IMAX",
            "soldOut": false
          },
          {
            "time": "3:40 PM",
            "format": "Dolby Atmos",
            "soldOut": true
          },
          {
            "time": "7:10 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "10:20 PM",
            "format": "Director Cut",
            "soldOut": false
          }
        ]
      },
      {
        "key": "Wed",
        "label": "Wed",
        "dayOffset": 2,
        "slots": [
          {
            "time": "10:30 AM",
            "format": "IMAX",
            "soldOut": true
          },
          {
            "time": "1:45 PM",
            "format": "Dolby Atmos",
            "soldOut": false
          },
          {
            "time": "5:00 PM",
            "format": "4DX",
            "soldOut": false
          },
          {
            "time": "8:15 PM",
            "format": "Director Cut",
            "soldOut": false
          },
          {
            "time": "11:10 PM",
            "format": "Classic Screen",
            "soldOut": false
          }
        ]
      }
    ]
  }
];

export const initialBookedSeats = {
  "1": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "2": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "3": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "4": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "5": [
    "A1",
    "A12",
    "B11",
    "B12",
    "C10",
    "C12",
    "D12",
    "D9",
    "E12",
    "E8",
    "F12",
    "F7",
    "G12",
    "G6",
    "H12",
    "H5"
  ],
  "6": [
    "A1",
    "A11",
    "A12",
    "B11",
    "C10",
    "C11",
    "D11",
    "D9",
    "E11",
    "E8",
    "F11",
    "F7",
    "G11",
    "G6",
    "H11",
    "H5"
  ],
  "7": [
    "A1",
    "A10",
    "A12",
    "B10",
    "B11",
    "C10",
    "D10",
    "D9",
    "E10",
    "E8",
    "F10",
    "F7",
    "G10",
    "G6",
    "H10",
    "H5"
  ],
  "8": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "9": [
    "A1",
    "A12",
    "A8",
    "B11",
    "B8",
    "C10",
    "C8",
    "D8",
    "D9",
    "E8",
    "F7",
    "F8",
    "G6",
    "G8",
    "H5",
    "H8"
  ],
  "10": [
    "A1",
    "A12",
    "A7",
    "B11",
    "B7",
    "C10",
    "C7",
    "D7",
    "D9",
    "E7",
    "E8",
    "F7",
    "G6",
    "G7",
    "H5",
    "H7"
  ],
  "11": [
    "A1",
    "A12",
    "A6",
    "B11",
    "B6",
    "C10",
    "C6",
    "D6",
    "D9",
    "E6",
    "E8",
    "F6",
    "F7",
    "G6",
    "H5",
    "H6"
  ],
  "12": [
    "A1",
    "A12",
    "A5",
    "B11",
    "B5",
    "C10",
    "C5",
    "D5",
    "D9",
    "E5",
    "E8",
    "F5",
    "F7",
    "G5",
    "G6",
    "H5"
  ],
  "13": [
    "A1",
    "A12",
    "A4",
    "B11",
    "B4",
    "C10",
    "C4",
    "D4",
    "D9",
    "E4",
    "E8",
    "F4",
    "F7",
    "G4",
    "G6",
    "H4",
    "H5"
  ],
  "14": [
    "A1",
    "A12",
    "A3",
    "B11",
    "B3",
    "C10",
    "C3",
    "D3",
    "D9",
    "E3",
    "E8",
    "F3",
    "F7",
    "G3",
    "G6",
    "H3",
    "H5"
  ],
  "15": [
    "A1",
    "A12",
    "A2",
    "B11",
    "B2",
    "C10",
    "C2",
    "D2",
    "D9",
    "E2",
    "E8",
    "F2",
    "F7",
    "G2",
    "G6",
    "H2",
    "H5"
  ],
  "16": [
    "A1",
    "A12",
    "B1",
    "B11",
    "C1",
    "C10",
    "D1",
    "D9",
    "E1",
    "E8",
    "F1",
    "F7",
    "G1",
    "G6",
    "H1",
    "H5"
  ],
  "17": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "18": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "19": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "20": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "21": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "22": [
    "A1",
    "A12",
    "B11",
    "B12",
    "C10",
    "C12",
    "D12",
    "D9",
    "E12",
    "E8",
    "F12",
    "F7",
    "G12",
    "G6",
    "H12",
    "H5"
  ],
  "23": [
    "A1",
    "A11",
    "A12",
    "B11",
    "C10",
    "C11",
    "D11",
    "D9",
    "E11",
    "E8",
    "F11",
    "F7",
    "G11",
    "G6",
    "H11",
    "H5"
  ],
  "24": [
    "A1",
    "A10",
    "A12",
    "B10",
    "B11",
    "C10",
    "D10",
    "D9",
    "E10",
    "E8",
    "F10",
    "F7",
    "G10",
    "G6",
    "H10",
    "H5"
  ],
  "25": [
    "A1",
    "A12",
    "A9",
    "B11",
    "B9",
    "C10",
    "C9",
    "D9",
    "E8",
    "E9",
    "F7",
    "F9",
    "G6",
    "G9",
    "H5",
    "H9"
  ],
  "26": [
    "A1",
    "A12",
    "A8",
    "B11",
    "B8",
    "C10",
    "C8",
    "D8",
    "D9",
    "E8",
    "F7",
    "F8",
    "G6",
    "G8",
    "H5",
    "H8"
  ],
  "27": [
    "A1",
    "A12",
    "A7",
    "B11",
    "B7",
    "C10",
    "C7",
    "D7",
    "D9",
    "E7",
    "E8",
    "F7",
    "G6",
    "G7",
    "H5",
    "H7"
  ],
  "28": [
    "A1",
    "A12",
    "A6",
    "B11",
    "B6",
    "C10",
    "C6",
    "D6",
    "D9",
    "E6",
    "E8",
    "F6",
    "F7",
    "G6",
    "H5",
    "H6"
  ],
  "29": [
    "A1",
    "A12",
    "A5",
    "B11",
    "B5",
    "C10",
    "C5",
    "D5",
    "D9",
    "E5",
    "E8",
    "F5",
    "F7",
    "G5",
    "G6",
    "H5"
  ],
  "30": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "31": [
    "A1",
    "A12",
    "A3",
    "B11",
    "B3",
    "C10",
    "C3",
    "D3",
    "D9",
    "E3",
    "E8",
    "F3",
    "F7",
    "G3",
    "G6",
    "H3",
    "H5"
  ],
  "32": [
    "A1",
    "A12",
    "A2",
    "B11",
    "B2",
    "C10",
    "C2",
    "D2",
    "D9",
    "E2",
    "E8",
    "F2",
    "F7",
    "G2",
    "G6",
    "H2",
    "H5"
  ],
  "33": [
    "A1",
    "A12",
    "B1",
    "B11",
    "C1",
    "C10",
    "D1",
    "D9",
    "E1",
    "E8",
    "F1",
    "F7",
    "G1",
    "G6",
    "H1",
    "H5"
  ],
  "34": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "35": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "36": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "37": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "38": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "39": [
    "A1",
    "A12",
    "B11",
    "B12",
    "C10",
    "C12",
    "D12",
    "D9",
    "E12",
    "E8",
    "F12",
    "F7",
    "G12",
    "G6",
    "H12",
    "H5"
  ],
  "40": [
    "A1",
    "A11",
    "A12",
    "B11",
    "C10",
    "C11",
    "D11",
    "D9",
    "E11",
    "E8",
    "F11",
    "F7",
    "G11",
    "G6",
    "H11",
    "H5"
  ],
  "41": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "42": [
    "A1",
    "A12",
    "A9",
    "B11",
    "B9",
    "C10",
    "C9",
    "D9",
    "E8",
    "E9",
    "F7",
    "F9",
    "G6",
    "G9",
    "H5",
    "H9"
  ],
  "43": [
    "A1",
    "A12",
    "A8",
    "B11",
    "B8",
    "C10",
    "C8",
    "D8",
    "D9",
    "E8",
    "F7",
    "F8",
    "G6",
    "G8",
    "H5",
    "H8"
  ],
  "44": [
    "A1",
    "A12",
    "A7",
    "B11",
    "B7",
    "C10",
    "C7",
    "D7",
    "D9",
    "E7",
    "E8",
    "F7",
    "G6",
    "G7",
    "H5",
    "H7"
  ],
  "45": [
    "A1",
    "A12",
    "A6",
    "B11",
    "B6",
    "C10",
    "C6",
    "D6",
    "D9",
    "E6",
    "E8",
    "F6",
    "F7",
    "G6",
    "H5",
    "H6"
  ],
  "46": [
    "A1",
    "A12",
    "A5",
    "B11",
    "B5",
    "C10",
    "C5",
    "D5",
    "D9",
    "E5",
    "E8",
    "F5",
    "F7",
    "G5",
    "G6",
    "H5"
  ],
  "47": [
    "A1",
    "A12",
    "A4",
    "B11",
    "B4",
    "C10",
    "C4",
    "D4",
    "D9",
    "E4",
    "E8",
    "F4",
    "F7",
    "G4",
    "G6",
    "H4",
    "H5"
  ],
  "48": [
    "A1",
    "A12",
    "A3",
    "B11",
    "B3",
    "C10",
    "C3",
    "D3",
    "D9",
    "E3",
    "E8",
    "F3",
    "F7",
    "G3",
    "G6",
    "H3",
    "H5"
  ],
  "49": [
    "A1",
    "A12",
    "A2",
    "B11",
    "B2",
    "C10",
    "C2",
    "D2",
    "D9",
    "E2",
    "E8",
    "F2",
    "F7",
    "G2",
    "G6",
    "H2",
    "H5"
  ],
  "50": [
    "A1",
    "A12",
    "B1",
    "B11",
    "C1",
    "C10",
    "D1",
    "D9",
    "E1",
    "E8",
    "F1",
    "F7",
    "G1",
    "G6",
    "H1",
    "H5"
  ],
  "51": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "52": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "53": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "54": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "55": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "56": [
    "A1",
    "A12",
    "B11",
    "B12",
    "C10",
    "C12",
    "D12",
    "D9",
    "E12",
    "E8",
    "F12",
    "F7",
    "G12",
    "G6",
    "H12",
    "H5"
  ],
  "57": [
    "A1",
    "A11",
    "A12",
    "B11",
    "C10",
    "C11",
    "D11",
    "D9",
    "E11",
    "E8",
    "F11",
    "F7",
    "G11",
    "G6",
    "H11",
    "H5"
  ],
  "58": [
    "A1",
    "A10",
    "A12",
    "B10",
    "B11",
    "C10",
    "D10",
    "D9",
    "E10",
    "E8",
    "F10",
    "F7",
    "G10",
    "G6",
    "H10",
    "H5"
  ],
  "59": [
    "A1",
    "A12",
    "A9",
    "B11",
    "B9",
    "C10",
    "C9",
    "D9",
    "E8",
    "E9",
    "F7",
    "F9",
    "G6",
    "G9",
    "H5",
    "H9"
  ],
  "60": [
    "A1",
    "A12",
    "A8",
    "B11",
    "B8",
    "C10",
    "C8",
    "D8",
    "D9",
    "E8",
    "F7",
    "F8",
    "G6",
    "G8",
    "H5",
    "H8"
  ],
  "61": [
    "A1",
    "A12",
    "A7",
    "B11",
    "B7",
    "C10",
    "C7",
    "D7",
    "D9",
    "E7",
    "E8",
    "F7",
    "G6",
    "G7",
    "H5",
    "H7"
  ],
  "62": [
    "A1",
    "A12",
    "A6",
    "B11",
    "B6",
    "C10",
    "C6",
    "D6",
    "D9",
    "E6",
    "E8",
    "F6",
    "F7",
    "G6",
    "H5",
    "H6"
  ],
  "63": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "64": [
    "A1",
    "A12",
    "A4",
    "B11",
    "B4",
    "C10",
    "C4",
    "D4",
    "D9",
    "E4",
    "E8",
    "F4",
    "F7",
    "G4",
    "G6",
    "H4",
    "H5"
  ],
  "65": [
    "A1",
    "A12",
    "A3",
    "B11",
    "B3",
    "C10",
    "C3",
    "D3",
    "D9",
    "E3",
    "E8",
    "F3",
    "F7",
    "G3",
    "G6",
    "H3",
    "H5"
  ],
  "66": [
    "A1",
    "A12",
    "A2",
    "B11",
    "B2",
    "C10",
    "C2",
    "D2",
    "D9",
    "E2",
    "E8",
    "F2",
    "F7",
    "G2",
    "G6",
    "H2",
    "H5"
  ],
  "67": [
    "A1",
    "A12",
    "B1",
    "B11",
    "C1",
    "C10",
    "D1",
    "D9",
    "E1",
    "E8",
    "F1",
    "F7",
    "G1",
    "G6",
    "H1",
    "H5"
  ],
  "68": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "69": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "70": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "71": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "72": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "73": [
    "A1",
    "A12",
    "B11",
    "B12",
    "C10",
    "C12",
    "D12",
    "D9",
    "E12",
    "E8",
    "F12",
    "F7",
    "G12",
    "G6",
    "H12",
    "H5"
  ],
  "74": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "75": [
    "A1",
    "A10",
    "A12",
    "B10",
    "B11",
    "C10",
    "D10",
    "D9",
    "E10",
    "E8",
    "F10",
    "F7",
    "G10",
    "G6",
    "H10",
    "H5"
  ],
  "76": [
    "A1",
    "A12",
    "A9",
    "B11",
    "B9",
    "C10",
    "C9",
    "D9",
    "E8",
    "E9",
    "F7",
    "F9",
    "G6",
    "G9",
    "H5",
    "H9"
  ],
  "77": [
    "A1",
    "A12",
    "A8",
    "B11",
    "B8",
    "C10",
    "C8",
    "D8",
    "D9",
    "E8",
    "F7",
    "F8",
    "G6",
    "G8",
    "H5",
    "H8"
  ],
  "78": [
    "A1",
    "A12",
    "A7",
    "B11",
    "B7",
    "C10",
    "C7",
    "D7",
    "D9",
    "E7",
    "E8",
    "F7",
    "G6",
    "G7",
    "H5",
    "H7"
  ],
  "79": [
    "A1",
    "A12",
    "A6",
    "B11",
    "B6",
    "C10",
    "C6",
    "D6",
    "D9",
    "E6",
    "E8",
    "F6",
    "F7",
    "G6",
    "H5",
    "H6"
  ],
  "80": [
    "A1",
    "A12",
    "A5",
    "B11",
    "B5",
    "C10",
    "C5",
    "D5",
    "D9",
    "E5",
    "E8",
    "F5",
    "F7",
    "G5",
    "G6",
    "H5"
  ],
  "81": [
    "A1",
    "A12",
    "A4",
    "B11",
    "B4",
    "C10",
    "C4",
    "D4",
    "D9",
    "E4",
    "E8",
    "F4",
    "F7",
    "G4",
    "G6",
    "H4",
    "H5"
  ],
  "82": [
    "A1",
    "A12",
    "A3",
    "B11",
    "B3",
    "C10",
    "C3",
    "D3",
    "D9",
    "E3",
    "E8",
    "F3",
    "F7",
    "G3",
    "G6",
    "H3",
    "H5"
  ],
  "83": [
    "A1",
    "A12",
    "A2",
    "B11",
    "B2",
    "C10",
    "C2",
    "D2",
    "D9",
    "E2",
    "E8",
    "F2",
    "F7",
    "G2",
    "G6",
    "H2",
    "H5"
  ],
  "84": [
    "A1",
    "A12",
    "B1",
    "B11",
    "C1",
    "C10",
    "D1",
    "D9",
    "E1",
    "E8",
    "F1",
    "F7",
    "G1",
    "G6",
    "H1",
    "H5"
  ],
  "85": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "86": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "87": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "88": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "89": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "90": [
    "A1",
    "A12",
    "B11",
    "B12",
    "C10",
    "C12",
    "D12",
    "D9",
    "E12",
    "E8",
    "F12",
    "F7",
    "G12",
    "G6",
    "H12",
    "H5"
  ],
  "91": [
    "A1",
    "A11",
    "A12",
    "B11",
    "C10",
    "C11",
    "D11",
    "D9",
    "E11",
    "E8",
    "F11",
    "F7",
    "G11",
    "G6",
    "H11",
    "H5"
  ],
  "92": [
    "A1",
    "A10",
    "A12",
    "B10",
    "B11",
    "C10",
    "D10",
    "D9",
    "E10",
    "E8",
    "F10",
    "F7",
    "G10",
    "G6",
    "H10",
    "H5"
  ],
  "93": [
    "A1",
    "A12",
    "A9",
    "B11",
    "B9",
    "C10",
    "C9",
    "D9",
    "E8",
    "E9",
    "F7",
    "F9",
    "G6",
    "G9",
    "H5",
    "H9"
  ],
  "94": [
    "A1",
    "A12",
    "A8",
    "B11",
    "B8",
    "C10",
    "C8",
    "D8",
    "D9",
    "E8",
    "F7",
    "F8",
    "G6",
    "G8",
    "H5",
    "H8"
  ],
  "95": [
    "A1",
    "A12",
    "A7",
    "B11",
    "B7",
    "C10",
    "C7",
    "D7",
    "D9",
    "E7",
    "E8",
    "F7",
    "G6",
    "G7",
    "H5",
    "H7"
  ],
  "96": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "97": [
    "A1",
    "A12",
    "A5",
    "B11",
    "B5",
    "C10",
    "C5",
    "D5",
    "D9",
    "E5",
    "E8",
    "F5",
    "F7",
    "G5",
    "G6",
    "H5"
  ],
  "98": [
    "A1",
    "A12",
    "A4",
    "B11",
    "B4",
    "C10",
    "C4",
    "D4",
    "D9",
    "E4",
    "E8",
    "F4",
    "F7",
    "G4",
    "G6",
    "H4",
    "H5"
  ],
  "99": [
    "A1",
    "A12",
    "A3",
    "B11",
    "B3",
    "C10",
    "C3",
    "D3",
    "D9",
    "E3",
    "E8",
    "F3",
    "F7",
    "G3",
    "G6",
    "H3",
    "H5"
  ],
  "100": [
    "A1",
    "A12",
    "A2",
    "B11",
    "B2",
    "C10",
    "C2",
    "D2",
    "D9",
    "E2",
    "E8",
    "F2",
    "F7",
    "G2",
    "G6",
    "H2",
    "H5"
  ],
  "101": [
    "A1",
    "A12",
    "B1",
    "B11",
    "C1",
    "C10",
    "D1",
    "D9",
    "E1",
    "E8",
    "F1",
    "F7",
    "G1",
    "G6",
    "H1",
    "H5"
  ],
  "102": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "103": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "104": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "105": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "106": [
    "A1",
    "A12",
    "B11",
    "C10",
    "D9",
    "E8",
    "F7",
    "G6",
    "H5"
  ],
  "107": [
    "A1",
    "A10",
    "A11",
    "A12",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "B1",
    "B10",
    "B11",
    "B12",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
    "B9"
  ],
  "108": [
    "A1",
    "A11",
    "A12",
    "B11",
    "C10",
    "C11",
    "D11",
    "D9",
    "E11",
    "E8",
    "F11",
    "F7",
    "G11",
    "G6",
    "H11",
    "H5"
  ],
  "109": [
    "A1",
    "A10",
    "A12",
    "B10",
    "B11",
    "C10",
    "D10",
    "D9",
    "E10",
    "E8",
    "F10",
    "F7",
    "G10",
    "G6",
    "H10",
    "H5"
  ],
  "110": [
    "A1",
    "A12",
    "A9",
    "B11",
    "B9",
    "C10",
    "C9",
    "D9",
    "E8",
    "E9",
    "F7",
    "F9",
    "G6",
    "G9",
    "H5",
    "H9"
  ],
  "111": [
    "A1",
    "A12",
    "A8",
    "B11",
    "B8",
    "C10",
    "C8",
    "D8",
    "D9",
    "E8",
    "F7",
    "F8",
    "G6",
    "G8",
    "H5",
    "H8"
  ]
};

export function listGenres() {
  return ["All", "India", "Global", ...new Set(movieCatalog.flatMap((movie) => movie.genres))];
}

export function getMovieById(id) {
  return movieCatalog.find((movie) => movie.id === Number(id)) ?? null;
}

export function getMovieSummaries(genre = "All") {
  const filtered = !genre || genre === "All"
    ? movieCatalog
    : genre === "India" || genre === "Global"
      ? movieCatalog.filter((movie) => movie.region === genre)
      : movieCatalog.filter((movie) => movie.genres.includes(genre));

  return filtered.map((movie) => ({
    id: movie.id,
    title: movie.title,
    genre: movie.genre,
    genres: movie.genres,
    rating: movie.rating,
    duration: movie.duration,
    year: movie.year,
    certificate: movie.certificate,
    region: movie.region,
    badge: movie.badge,
    badgeLabel: movie.badgeLabel,
    price: movie.price,
    poster: movie.poster,
    director: movie.director,
    cast: movie.cast,
    description: movie.description
  }));
}

export function getShowSelection(movie, dateKey, showtime) {
  if (!movie) return null;
  const selectedDate = movie.showDates.find((date) => date.key === dateKey);
  if (!selectedDate) return null;
  const selectedSlot = selectedDate.slots.find((slot) => slot.time === showtime);
  if (!selectedSlot) return null;
  return { selectedDate, selectedSlot };
}

export function isPremiumSeat(seatId) {
  return PREMIUM_ROWS.includes(String(seatId).charAt(0));
}

export function isReclinerSeat(seatId) {
  return RECLINER_ROWS.includes(String(seatId).charAt(0));
}

export function getSeatTier(seatId) {
  if (isReclinerSeat(seatId)) return "recliner";
  if (isPremiumSeat(seatId)) return "premium";
  return "standard";
}

export function getSeatPrice(movie, seatId) {
  const tier = getSeatTier(seatId);
  if (tier === "recliner") {
    return movie.price.recliner ?? movie.price.premium + 180;
  }

  return tier === "premium" ? movie.price.premium : movie.price.standard;
}

export function isValidSeatId(seatId) {
  return /^[A-H](?:[1-9]|1[0-2])$/.test(String(seatId));
}

export function calculateBookingTotal(movie, seats) {
  return seats.reduce((total, seatId) => {
    return total + getSeatPrice(movie, seatId);
  }, BOOKING_FEE);
}
