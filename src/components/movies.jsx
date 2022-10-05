import React, { Component } from "react";
import { getMovies } from "../data/fakeMovieService";
import Like from './common/like'
import Pagination from './common/pagination'
import { paginate } from '../utils/paginate'

class Movie extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };

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

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state; 

    if (count === 0) {
      return (
        <h1 className="main-title">There are no movies in the database.</h1>
      );
    }
    
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <>
        <p>Showing {count} movies in the database.</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
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
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination 
          itemsCount={count} 
          pageSize={pageSize} 
          currentPage={currentPage}
          onPageChange={this.handlePageChange} 
        />
      </>
    );
  }
}

export default Movie;
