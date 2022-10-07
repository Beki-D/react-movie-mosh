import React, { Component } from 'react';
import Like from './common/like'
import TableHeader from './common/tableHeader'

class MoviesTable extends Component {
    columns = [
        { path: 'title', label: 'Title'},
        { path: 'genre.name', label: 'Genre'},
        { path: 'numberInStock', label: 'Stock'},
        { path: 'dailyRentalRate', label: 'Rate'},
        { key: 'like'},
        { key: 'delete'}
    ];

    render() { 
        const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
        
        return ( 
            <table className="table table-striped">
                <TableHeader columns={this.columns} sort={sortColumn} onSort={onSort} />
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