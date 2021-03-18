import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ changeService }) => {
    const menuItems = [ 
        { value: 'People', id: 'people' },
        { value: 'Planets', id: 'planets' },
        { value: 'Starships', id: 'starships' }
    ]

    const menuItemsElements = menuItems.map(({ value, id }) => {
        const link = value.toLowerCase();
        return (
            <li key={ id } className="header-item">
                <Link to={ `/${link}` } className="header-link">
                    <span className="header-link__text">{ value }</span>
                </Link>
            </li>
        );
    });

    return (
        <header className="header">
            <Link className="header__title-link" to="/">
                <h1 className="title">StarWars DB</h1>
            </Link>

            <nav className="header-nav">
                <ul className="header-list">{ menuItemsElements }</ul>
            </nav>

            <button 
                type="button"
                className="button-service"
                onClick={ changeService } >
                Change Service
            </button>
        </header>
    );
};

export default Header;