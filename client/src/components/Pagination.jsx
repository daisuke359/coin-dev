import React from 'react';
import Pagination from 'react-bootstrap/Pagination'
import styled from 'styled-components';

const StyledPagination = styled(Pagination)`
        justify-content: center;
        margin-top: 40px;
        
        .page-link {
            color: black;
        }
    `;

export default function Paginate({postsPerPage, totalPosts, paginate, currentPage}) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <StyledPagination>
            {pageNumbers.map(number => (
                <Pagination.Item onClick={() => paginate(number)} key={number} active={number === currentPage}>
                {number}
                </Pagination.Item>
                ))}
        </StyledPagination>
    )
}
