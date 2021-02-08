import React from 'react';
import './app.css';

import Header from '../header';
import RandomBlock from '../randomBlock';
import ItemList from '../itemList';
import PeopleInfo from '../peopleInfo';

const App = () => {
    return (
        <div className="app">
            <div className="app-wrapper">
                <Header />
                <RandomBlock />

                <div className="app-content">
                    <ItemList />
                    <PeopleInfo />
                </div>
            </div>
        </div>
    );
};

export default App;