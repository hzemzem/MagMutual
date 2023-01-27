import React from 'react';

function Homepage() {
    return (
        <div className='container homepage'>
            <a href='/search-by-text'>Search by ID, Profession, or Country</a>
            <a href='search-by-date'>Search by date range</a>
        </div>
    );
}

export default Homepage;