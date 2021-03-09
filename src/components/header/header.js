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
                <a href="#" className="header-link">
                    <span className="header-link__text">{ value }</span>
                </a>
            </li>
        );
    });

    return (
        <header className="header">
            <a className="header__title-link" href="#">
                <h1 className="title">StarWars DB</h1>
            </a>

            <nav className="header-nav">
                <ul className="header-list">{ menuItemsElements }</ul>
            </nav>
        </header>
    );
};

export default Header;