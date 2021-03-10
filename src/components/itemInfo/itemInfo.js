import React, { Component } from 'react';
import './itemInfo.css';

import Loader from '../loader';

export default class ItemInfo extends Component {
    state = {
        item: null,
        loading: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id === this.props.id) return;

        this.updateItem();
    }

    updateItem = () => {
        const { id } = this.props;
        if (!id) return;

        this.setState({ loading: true });

        this.props.getInfo(id)
            .then((item) => this.setState({ item }))
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { item, loading } = this.state;
        
        const content = loading ? <Loader /> : item ? this.props.renderInfo(item) : 'Please, select a person';

        return (
            <div className="block people-info">
                { content }
            </div>
        );
    }
}