type movie = {
    name: string,
    releaseDate: number,
    genre:GENERO,
    review:REVIEW
}

enum GENERO {
    ACAO = "ação",
    DRAMA = " drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror",
}

enum REVIEW {
    PERFECT = 10,
    GREAT = 8,
    GOOD = 5,
    BAD = 3,
    AWFUL = 0
}

const toyStory:movie = {
    name: "Toy Story",
    releaseDate: 1995,
    genre: GENERO.COMEDIA,
    review: REVIEW.PERFECT
}

const Palmer:movie = {
    name: "Palmer",
    releaseDate: 2021,
    genre: GENERO.DRAMA,
    review: REVIEW.GREAT
}

const Uncharted:movie ={
    name: "Uncharted",
    releaseDate: 2022,
    genre: GENERO.ACAO,
    review: REVIEW.GOOD
}

const It:movie = {
    name: "It",
    releaseDate: 2017,
    genre: GENERO.TERROR,
    review: REVIEW.AWFUL
}

const list = [toyStory, Palmer,Uncharted,It]

function pullMovies () {
    console.table(list)
}

pullMovies()