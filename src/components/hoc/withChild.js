import React from 'react';

const withChild = (View, fn) => {
    return (props) => {
        return (
            <View { ...props } >
                { fn }
            </View>
        );        
    }
};

export default withChild;