import React, { Component } from 'react';

import { Row } from '../decorators';
import { PlanetList, PlanetInfo } from '../sw-components';

export default class PlanetPage extends Component {
    state = {
        id: null
    }

    setItem = (id) => {
        this.setState({ id });
    }

    render() {
        const { id } = this.state;

        return <Row
                left={ <PlanetList setItem={ this.setItem } /> }
                right={ <PlanetInfo id={ id } /> } />;
    }
}