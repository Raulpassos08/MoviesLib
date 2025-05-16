import React from "react";
import "./styles.css";

const movieData = {
  id: "1",
  title: "Interestelar",
  releaseYear: "2014",
  duration: "2h 49m",
  rating: "8.6",
  genres: ["Ficção Científica", "Aventura", "Drama"],
  director: "Christopher Nolan",
  synopsis:
    "Quando a Terra está se tornando inabitável no futuro, um fazendeiro e ex-piloto da NASA, Joseph Cooper, é recrutado por Professor Brand para pilotar uma espaçonave, junto com uma equipe de pesquisadores, para descobrir se há algum planeta habitável para os humanos em um buraco de minhoca perto de Saturno.",
  cast: [
    {
      name: "Matthew McConaughey",
      character: "Joseph Cooper",
      photo: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Anne Hathaway",
      character: "Dr. Amelia Brand",
      photo: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Jessica Chastain",
      character: "Murphy Cooper",
      photo: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michael Caine",
      character: "Professor Brand",
      photo: "/placeholder.svg?height=100&width=100",
    },
  ],
  similarMovies: [
    {
      id: "2",
      title: "Origem",
      poster: "/placeholder.svg?height=300&width=200",
    },
    {
      id: "3",
      title: "Gravidade",
      poster: "/placeholder.svg?height=300&width=200",
    },
    {
      id: "4",
      title: "Perdido em Marte",
      poster: "/placeholder.svg?height=300&width=200",
    },
  ],
  poster: "/placeholder.svg?height=600&width=400",
  backdrop: "/placeholder.svg?height=800&width=1600",
};

export default function MovieDetails() {
  // Em um cenário real, você buscaria os dados do filme com base no ID
  const movie = movieData;

  return (
    <div className="movie-details">
      {/* Banner do filme */}
      <div className="movie-banner">
        <img
          src={movie.backdrop || "/placeholder.svg"}
          alt={movie.title}
          className="movie-backdrop"
        />
        <div className="movie-gradient"></div>

        <div className="movie-info-container">
          <div className="movie-poster-container">
            <img
              src={movie.poster || "/placeholder.svg"}
              alt={movie.title}
              className="movie-poster"
            />
          </div>

          <div className="movie-header-info">
            <h1 className="movie-title">{movie.title}</h1>
            <div className="movie-meta">
              <span>{movie.releaseYear}</span>
              <span className="separator">•</span>
              <span>{movie.duration}</span>
              <span className="separator">•</span>
              <div className="movie-rating">
                <span className="star">★</span>
                <span>{movie.rating}/10</span>
              </div>
            </div>

            <div className="movie-genres">
              {movie.genres.map((genre) => (
                <span key={genre} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="movie-content">
        <div className="movie-main-content">
          {/* Sinopse */}
          <section className="movie-section">
            <h2 className="section-title">Sinopse</h2>
            <p className="movie-synopsis">{movie.synopsis}</p>
          </section>

          {/* Diretor */}
          <section className="movie-section">
            <h2 className="section-title">Diretor</h2>
            <p className="director-name">{movie.director}</p>
          </section>

          {/* Elenco */}
          <section className="movie-section">
            <h2 className="section-title">Elenco Principal</h2>
            <div className="cast-grid">
              {movie.cast.map((actor) => (
                <div key={actor.name} className="cast-card">
                  <div className="cast-photo-container">
                    <img
                      src={actor.photo || "/placeholder.svg"}
                      alt={actor.name}
                      className="cast-photo"
                    />
                  </div>
                  <div className="cast-info">
                    <h3 className="cast-name">{actor.name}</h3>
                    <p className="cast-character">{actor.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Filmes similares */}
        <aside className="similar-movies">
          <h2 className="section-title">Filmes Similares</h2>
          <div className="similar-movies-grid">
            {movie.similarMovies.map((similar) => (
              <a
                href={`/filmes/${similar.id}`}
                key={similar.id}
                className="similar-movie-card"
              >
                <div className="similar-movie-poster-container">
                  <img
                    src={similar.poster || "/placeholder.svg"}
                    alt={similar.title}
                    className="similar-movie-poster"
                  />
                </div>
                <div className="similar-movie-info">
                  <h3 className="similar-movie-title">{similar.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
