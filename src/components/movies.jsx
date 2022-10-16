import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../data/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from './common/pagination'
import ListGroup from "./common/listGroup";
// import Button from "./common/button";
import { paginate } from '../utils/paginate'
import SearchBox from "./searchBox";
import { getGenres } from "../data/fakeGenreService"
import _ from "lodash";

class Movie extends Component {  
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    searchQuery: "",
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  }

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn, currentPage: 1 });
  }

  getPagedData = () => {
    //Destructuring
    const { pageSize, currentPage, sortColumn, selectedGenre, searchQuery, movies: allMovies } = this.state;
    
    let filtered = allMovies;

    //filtered the movie list conditionally based on query or genre....(but not both) 
    if(searchQuery) 
      filtered = allMovies.filter(m => 
          m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    else if(selectedGenre && selectedGenre._id) 
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

    //sorted the filtered list based on title first
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        
    //paginate the data 
    //filter -> sort -> paginate
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies};
  }

  render() {
    // console.log(this.state);
    //Destructuring this.state
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, genres, selectedGenre, searchQuery } = this.state; 

    if (count === 0) {
      return (
        <h1 className="main-title">There are no movies in the database.</h1>
      );
    }

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row container-fluid p-3">
        <div className="col-3">
          <ListGroup 
            items={genres} 
            // textProperty="someOthername"
            // valueProperty="_someOtherid"
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect} />
        </div>
        
        <Link className="btn col-4 h-25 btn-primary" to="/movies/new" replace={true}>Add Movie</Link>
        <SearchBox className="col-4 h-25" value={searchQuery} onChange={this.handleSearch} />
        <div className="col">
          <p>Showing <span className="badge bg-secondary">{totalCount + " " + (selectedGenre ? selectedGenre.name : " ")}</span> movies in the database.</p>
          
          <MoviesTable 
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />

          <Pagination 
            itemsCount={totalCount} 
            pageSize={pageSize} 
            currentPage={currentPage}
            onPageChange={this.handlePageChange} 
          />
        </div>
        
        <div className="col-1"></div>

      </div>
    );
  }
}

export default Movie;
