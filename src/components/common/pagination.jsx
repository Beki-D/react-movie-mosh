import React from "react";
import _ from 'lodash';

const Pagination = (props) => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;
    console.log(currentPage);

    const pageCount = Math.ceil(itemsCount / pageSize);
    
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <nav aria-label="...">
            <ul className="pagination pagination-md">
                {pages.map(page => (
                    <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'} aria-current="page">
                        <a className="page-link" href="#a" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Pagination;