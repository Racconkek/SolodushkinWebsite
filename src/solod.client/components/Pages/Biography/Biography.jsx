import React from 'react';

import './Biography.css';

export default class Biography extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    render() {
        return this.state.isLoading ? <div className={'Loading Page'}>Loading</div> :
            <div className={'Page'}>

            </div>
    }
};

