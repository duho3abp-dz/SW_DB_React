import React from 'react';
import './header.css';

const Header = () => {
    const menuItems = [ 
        { value: 'People', id: 'people' },
        { value: 'Planets', id: 'planets' },
        { value: 'Starships', id: 'starships' }
    ]

    const menuItemsElements = menuItems.map(({ value, id }) => {
        return (
            <li key={ id } className="header-item">
                <button type="button" className="header-button">{ value }</button>
            </li>
        );
    });

    return (
        <header className="header">
            <h1 className="title">StarWars DB</h1>

            <nav className="header-nav">
                <ul className="header-list">{ menuItemsElements }</ul>
            </nav>
        </header>
    );
};

export default Header;