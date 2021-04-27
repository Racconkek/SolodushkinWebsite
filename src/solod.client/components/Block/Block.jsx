import React from "react";
import PropTypes from 'prop-types';

import './Block.css';

export default class Block extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        className: PropTypes.string
    }

    render() {
        const blockContentsClassName = 'BlockContent' + this.props.className? this.props.className: '';
        return <div className={'Block'}>
            <span className={'BlockTitle'}>{this.props.title}</span>
            <div className={blockContentsClassName}>
                {this.props.children}
            </div>
        </div>
    }
}



