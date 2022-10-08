import React, { Component } from 'react';

//columns: array
//sortColum: object
//onSort: function

class TableHeader extends Component {
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

    renderSortIcon = column => {
        const { sortColumn } = this.props;

        if (column.path !== this.props.sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc position-absolute end-2"></i>;
        return <i className="fa fa-sort-desc position-absolute end-2"></i>
    }

    render() { 
        return (
            <thead>
                <tr className="bg-secondary rounded-3 text-light">
                    {this.props.columns.map(column => (
                        <th 
                            className="clickable position-relative"
                            key={column.path || column.key} 
                            onClick={() => this.raiseSort(column.path)}
                        >
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;