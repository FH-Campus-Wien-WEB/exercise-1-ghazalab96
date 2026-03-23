const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  res.send(
    [
      {
        "Title": "Anatomy of a Fall",
        "Released": "2024-03-22",
        "Runtime": 151,
        "Genres": [
          "Crime",
          "Drama",
          "Mystery"
        ],
        "Directors": [
          "Justine Triet"
        ],
        "Writers": [
          "Justine Triet",
          "Arthur Harari"
        ],
        "Actors": [
          "Sandra Hüller",
          "Swann Arlaud",
          "Milo Machado-Graner"
        ],
        "Plot": "A woman is suspected of murder after her husband's death; their half-blind son faces a moral dilemma as the main witness.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MjFkZmQtMThiYi00N2JhLTk2YzItZTE5ZGUxZTIyZDVkXkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore": 86,
        "imdbRating": 7.6
      },
      {
        "Title": "The Taste of Things",
        "Released": "2024-02-09",
        "Runtime": 135,
        "Genres": [
          "Drama",
          "History",
          "Romance"
        ],
        "Directors": [
          "Anh Hung Tran"
        ],
        "Writers": [
          "Anh Hung Tran",
          "Marcel Rouff"
        ],
        "Actors": [
          "Juliette Binoche",
          "Benoît Magimel",
          "Emmanuel Salinger"
        ],
        "Plot": "The story of Eugenie, an esteemed cook, and Dodin - the fine gourmet chef she has been working for over the last 20 years.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTBkZTk1NzMtMTNlMC00ZjFmLWE5ZWYtYzg0NmVlNzllNTRlXkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore": 85,
        "imdbRating": 7.4
      },
      {
        "Title": "Uncut Gems",
        "Released": "2019-12-25",
        "Runtime": 135,
        "Genres": [
          "Crime",
          "Drama",
          "Thriller"
        ],
        "Directors": [
          "Benny Safdie",
          "Josh Safdie"
        ],
        "Writers": [
          "Ronald Bronstein",
          "Josh Safdie",
          "Benny Safdie"
        ],
        "Actors": [
          "Adam Sandler",
          "Julia Fox",
          "Idina Menzel",
          "Mesfin Lamengo"
        ],
        "Plot": "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hopes of staying afloat and alive.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmI0YjA5NjItYzExYi00NzkxLTkxNDctNGJjYTZhM2M0NDQ0XkEyXkFqcGc@._V1_SX300.jpg",
        "Metascore": 93,
        "imdbRating": 7.4
      }
    ]
  )
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")


