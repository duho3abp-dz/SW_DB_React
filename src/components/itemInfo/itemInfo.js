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
        
        const content = loading ? <Loader /> : item ? info : 'Please, select a person';

        return (
            <div className="block people-info">
                { content }
            </div>
        );
    }
}

const RenderItem = ({ item, children }) => {
    const { img, name } = item;
    return (
        <>
            <div className="random-block-wrapper">
                <img className="random-block-wrapper-picture" src={ img } alt={ name }/>
            </div>
            <div className="random-block-info">
                <h3 className="random-block-info-title">{ name }</h3>
                <ul className="random-block-info-list">
                    {
                        React.Children.map(children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </ul>
            </div>
        </>
    );
};