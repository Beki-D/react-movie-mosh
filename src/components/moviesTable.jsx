import React, { Component } from 'react';
import Like from './common/like'

class MoviesTable extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) 
          sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
          sortColumn.path = path;
          sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    render() { 
        const { movies, onDelete, onLike } = this.props;
        
        return ( 
            <table className="table table-striped">
                <thead>
                  <tr className="bg-secondary rounded-3 text-light">
                    <th onClick={() => this.raiseSort("title")}>Title</th>
                    <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
                    <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
                    <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
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
                            <Like liked={movie.liked} onClick={() => onLike(movie)} />
                        </td>
                        <td className="d-flex justify-content-end flex-grow-2">
                            <button
                                onClick={() => onDelete(movie)}
                                className="btn btn-danger btn-sm flex-grow-1"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                  ))}
                </tbody>
            </table>
         );
    }
}
 
export default MoviesTable;