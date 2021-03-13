import React, {Component} from 'react';

import Loader from '../loader';
import Error from '../error';
import { Block } from '../decorators';

const withData = (View) => {
    return class extends Component {
        state = {
            data: [],
            error: false,
            loading: true
        }
    
        componentDidMount() {
            this.updateData();
        }
        
        componentDidUpdate(prevProps) {
            if (this.props.getData === prevProps.getData) return;

            this.updateData();
        }

        updateData = () => {
            const { getData } = this.props;

            this.setState({ loading: true });

            getData()
                .then((data) => this.setState({ data }))
                .catch(() => this.setState({ error: true }))
                .finally(() => this.setState({ loading: false }));
        }
        
        render() {
            const { data, error, loading } = this.state;

            const content = error ? <Error /> 
                : loading ? <Loader /> 
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