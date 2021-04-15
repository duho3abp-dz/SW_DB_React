import React from 'react';

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

export default RenderItem;