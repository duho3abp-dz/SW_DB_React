import React, { Component } from 'react';
import RenderItem from './renderItem';
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
        if (
            prevProps.id === this.props.id &&
            prevProps.getInfo === this.props.getInfo
        ) return;
        
        this.updateItem();
    }

    updateItem = () => {
        const { id, getInfo } = this.props;
        if (!id) return;

        this.setState({ loading: true });

        getInfo(id)
            .then((item) => this.setState({ item }))
            .finally(() => this.setState({ loading: false }));
    };

    render() {
        const { item, loading } = this.state;

        const info = (
            <RenderItem item={ item }>
                { this.props.children }
            </RenderItem>
        );
        
        const content = loading ? <Loader /> : item ? info : 'Please, select a item from the list';

        return (
            <div className="block people-info">
                { content }
            </div>
        );
    };
}