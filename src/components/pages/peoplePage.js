import React, { Component } from 'react';

import { Row } from '../decorators'
import { PeopleList, PeopleInfo } from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        id: null
    }

    setItem = (id) => {
        this.setState({ id });
    }

    render() {
        const { id } = this.state;
        
        return <Row
                left={ <PeopleList setItem={ this.setItem } /> }
                right={ <PeopleInfo id={ id } /> } /> ;
    }
}