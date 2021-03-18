import React from 'react';
import './home.css';

import { Block } from '../decorators';

const Home = () => {
    return (
        <Block classNames={ 'wide' } >
            <div className="home">
                <h2>Welkome to StarWars</h2>
                <p>
                    Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.
                </p>
            </div>
        </Block>
    );
};

export default Home;