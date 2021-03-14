import React, { Component } from 'react';

import { Row } from '../decorators';
import { StarshipList, StarshipInfo } from '../sw-components';

export default class StarshipPage extends Component {
    state = {
        id: null
    }

    setItem = (id) => {
        this.setState({ id });
    }

    render() {
        const { id } = this.state;

        return <Row 
                left={ <StarshipList setItem={ this.setItem } /> }
                right={ <StarshipInfo id={ id } /> } /> ;
    }
}