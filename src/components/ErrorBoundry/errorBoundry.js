import React, { Component } from 'react';

import Error from '../error';

export default class ErrorBoundry extends Component {
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    render() {
        return this.state.error ? <Error /> : this.props.children ;
    }
}