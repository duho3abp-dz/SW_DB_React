import React from 'react';

const withChild = (fn) => (View) => {
    return (props) => {
        return (
            <View { ...props } >
                { fn }
            </View>
        );        
    }
};

export default withChild;