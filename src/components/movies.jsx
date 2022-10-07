import React, { Component } from "react";
import { getMovies } from "../data/fakeMovieService";
import Like from './common/like'
import Pagination from './common/pagination'
import ListGroup from "./common/listGroup";
import { paginate } from '../utils/paginate'
// import { getMovies } from "../services/fakeMovieService"
import { getGenres } from "../data/fakeGenreService"

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    const genres = [{ name: 'All Genres', _id: "-1"}, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  handleGenreSelect = genre => {
    // console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  render() {
    console.log(this.state);

    const { length: count } = this.state.movies;
    const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state; 

    if (count === 0) {
      return (
        <h1 className="main-title">There are no movies in the database.</h1>
      );
    }
    
    const genreFilteredMovies = 
      selectedGenre && (selectedGenre._id != -1)
        ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
        : allMovies;

    const movies = paginate(genreFilteredMovies, currentPage, pageSize);

    return (
      <div className="row container p-3">
        <div className="col-3">
          <ListGroup 
            items={this.state.genres} 
            // textProperty="name"
            // valueProperty="_id"
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect} />
        </div>

        <div className="col">
          <p>Showing {genreFilteredMovies.length} movies in the database.</p>
          <table className="table table-striped">
            <thead>
              <tr className="bg-secondary rounded-3 text-light">
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                  </td>
                  <td className="d-flex justify-content-end flex-grow-2">
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm flex-grow-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination 
            itemsCount={genreFilteredMovies.length} 
            pageSize={pageSize} 
            currentPage={currentPage}
            onPageChange={this.handlePageChange} 
          />
        </div>

      </div>
    );
  }
}

export default Movie;
