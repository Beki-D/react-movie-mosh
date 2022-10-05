import React, { Component } from "react";
import MovieTable from "./movieTable";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";
import List from "./common/list";
import { getMovies } from "../data/fakeMovieService";
import { getGenres } from "../data/fakeGenreService";
import _ from "lodash";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    itemsToShow: 4,
    currentPage: 1,
    sortColumn: {
      topic: "title",
      direction: "asc"
    }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleIconClicked = movieObj => {
    const likedMovie = [...this.state.movies];
    const index = likedMovie.indexOf(movieObj);
    likedMovie[index] = { ...movieObj };
    likedMovie[index].liked = !likedMovie[index].liked;

    this.setState({ movies: likedMovie });
  };

  handlePageNumberClicked = page => {
    this.setState({ currentPage: page });
  };

  handleListItemClick = genre => {
    // doesn't initialize selectedGenre in the state
    // because if it's not clicked yet,
    // it should be undefined
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortedObj => {
    this.setState({ sortColumn: sortedObj });
  };

  render() {
    const {
      movies,
      itemsToShow,
      currentPage,
      selectedGenre,
      sortColumn
    } = this.state;
    const { length: count } = this.state.movies;

    if (count === 0) {
      return (
        <h1 className="main-title">There are no movies in the database.</h1>
      );
    }

    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter(({ genre: { _id } }) => _id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(
      filtered,
      [sortColumn.topic],
      [sortColumn.direction]
    );

    // when the currentPage is changed, on clicked, this render() method re-render again, and this function gets called again with an updated {currentPage}, hence new elements displayed
    const paginatedMovies = paginate(sorted, currentPage, itemsToShow);

    return (
      <div className="row">
        <div className="col-3">
          <List
            items={this.state.genres}
            onListItemClick={this.handleListItemClick}
            selectedListItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <h1 className="main-title">
            Showing {filtered.length} movies in the database
          </h1>
          <MovieTable
            allMovies={paginatedMovies}
            onItemDelete={this.handleDelete}
            onIconClick={this.handleIconClicked}
            sortColumn={this.state.sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            currentPage={currentPage}
            totalElements={filtered.length}
            itemsToShow={itemsToShow}
            onPageClicked={this.handlePageNumberClicked}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
