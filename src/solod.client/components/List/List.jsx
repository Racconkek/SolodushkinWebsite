import React from "react";
import PropTypes from 'prop-types';

import './List.css';


export default function List({data, dataStyle}) {
    return <div className={'List'}>
        {
            data.map((item, i) => {
                const index = i < 10 ? '0' + i : i
                return <div key={index} className={'ListItem'}>
                    <div className={'ListIndex'}>{index}</div>
                    <div className={dataStyle}>{item}</div>
                </div>
            })
        }
    </div>
}

List.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    dataStyle: PropTypes.string.isRequired
}



