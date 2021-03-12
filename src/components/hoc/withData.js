import React, {Component} from 'react';

import Loader from '../loader';
import Error from '../error';
import { Block } from '../decorators';

const withData = (View, get) => {
    return class extends Component {
        state = {
            data: [],
            error: false
        }
    
        componentDidMount() {
            const { getData } = this.props;
            const getService = getData ? getData : get;

            getService()
                .then((data) => this.setState({ data }))
                .catch(() => this.setState({ error: true }));
        }
        
        render() {
            const { data, error } = this.state;

            const content = error ? <Error /> 
                : !data.length 
                ? <Loader /> 
                : <View { ...this.props } data={data} /> ; 

            return (
                <Block>
                    { content }
                </Block>
            ); 
        }
    }
};

export default withData;