import React from "react";
import PropTypes from 'prop-types';

import './Block.css';

export default class Block extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        id: PropTypes.string
    }

    render() {
        return <div className={'Block'} id={this.props.id}>
            <span className={'BlockTitle'}>{this.props.title}</span>
            <div className={'BlockContent'}>
                {this.props.children}
            </div>
        </div>
    }
}



