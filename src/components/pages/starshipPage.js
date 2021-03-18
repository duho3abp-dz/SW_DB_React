import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-components';

 const StarshipPage = ({ history }) => {
    return <StarshipList setItem={(id) => {
        history.push(`/starships/${ id }`);
    }} />
}

export default withRouter(StarshipPage);