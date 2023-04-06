import React from 'react';
import './Pagination.css'

const Pagination = ({ page, totalPages, handleChangePagination }) => {
    return (
        <div className='Pagination'>
            <button disabled={page ===1} className='Pagination-button' onClick={() => handleChangePagination(false)}>&larr;
            </button>
            <span className='Pagination-info'>
                page <span>{page}</span> of <b>{totalPages} </b>
            </span>
            <button disabled={page === totalPages} className='Pagination-button' onClick={() => handleChangePagination(true)}>&rarr;
            </button>
        </div>
    )
}
export default Pagination