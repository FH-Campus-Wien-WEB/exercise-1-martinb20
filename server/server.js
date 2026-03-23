const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

const movies = [
    {
        "Title": "The Godfather",
        "Released": "1972-03-24",
        "Runtime": 175,
        "Genres": ["Crime", "Drama"],
        "Directors": ["Francis Ford Coppola"],
        "Writers": ["Mario Puzo", "Francis Ford Coppola"],
        "Actors": ["Marlon Brando", "Al Pacino", "James Caan"],
        "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Metascore": 100,
        "imdbRating": 9.2
    },
    {
        "Title": "Oppenheimer",
        "Released": "2023-07-21",
        "Runtime": 180,
        "Genres": ["Biography", "Drama", "History"],
        "Directors": ["Christopher Nolan"],
        "Writers": ["Christopher Nolan", "Kai Bird", "Martin Sherwin"],
        "Actors": ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
        "Plot": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
        "Poster": "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
        "Metascore": 88,
        "imdbRating": 8.4
    },
    {
        "Title": "The Wolf of Wall Street",
        "Released": "2013-12-25",
        "Runtime": 180,
        "Genres": ["Biography", "Comedy", "Crime"],
        "Directors": ["Martin Scorsese"],
        "Writers": ["Terence Winter", "Jordan Belfort"],
        "Actors": ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
        "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        "Metascore": 75,
        "imdbRating": 8.2
    },
    {
        "Title": "Inglourious Basterds",
        "Released": "2009-08-21",
        "Runtime": 153,
        "Genres": ["Adventure", "Drama", "War"],
        "Directors": ["Quentin Tarantino"],
        "Writers": ["Quentin Tarantino"],
        "Actors": ["Brad Pitt", "Diane Kruger", "Eli Roth"],
        "Plot": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        "Poster": "https://upload.wikimedia.org/wikipedia/en/c/c3/Inglourious_Basterds_poster.jpg",
        "Metascore": 69,
        "imdbRating": 8.3
    }
];

app.get('/movies', function (req, res) {
    res.json(movies);
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

