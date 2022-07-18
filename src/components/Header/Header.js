import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = (props) => {
    const [searchTerm, setSeachTerm] = useState('');
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm) return;
        props.onSearch(searchTerm);
    };
    const handleOnChange = (e) => {
        setSeachTerm(e.target.value);
    };
    return (
        <header>
            <Link to="/">
                <h1>Movie App</h1>
            </Link>
            <div className='search-input'>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" placeholder="Search a Movie" onChange={handleOnChange} />
                </form>
            </div>
        </header>
    );
};

export default Header;