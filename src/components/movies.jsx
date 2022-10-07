import React, { Component } from "react";
import { getMovies } from "../data/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from './common/pagination'
import ListGroup from "./common/listGroup";
import { paginate } from '../utils/paginate'
// import { getMovies } from "../services/fakeMovieService"
import { getGenres } from "../data/fakeGenreService"
import _ from "lodash";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc'}
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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn, currentPage: 1 });
  }

  render() {
    // console.log(this.state);
    //Destructuring this.state
    const { length: count } = this.state.movies;
    const { 
      pageSize, 
      currentPage, 
      sortColumn,
      selectedGenre, 
      movies: allMovies 
    } = this.state; 

    if (count === 0) {
      return (
        <h1 className="main-title">There are no movies in the database.</h1>
      );
    }

    //filtered the movie list
    const genreFilteredMovies = 
      selectedGenre && (selectedGenre._id !== '-1')
        ? allMovies.filter(m => m.genre._id === selectedGenre._id) 
        : allMovies;

    //sorted the filtered list based on title first
    const sorted = _.orderBy(genreFilteredMovies, [sortColumn.path], [sortColumn.order]);
        
    //paginate the data 
    //filter -> sort -> paginate
    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row container p-3">
        <div className="col-3">
          <ListGroup 
            items={this.state.genres} 
            // textProperty="someOthername"
            // valueProperty="_someOtherid"
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect} />
        </div>

        <div className="col">
          <p>Showing {genreFilteredMovies.length} movies in the database.</p>
          
          <MoviesTable 
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />

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
