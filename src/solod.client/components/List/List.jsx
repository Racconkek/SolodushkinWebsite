import React from "react";
import PropTypes from 'prop-types';

import './List.css';


export default function List({data, dataStyle}) {
    return <div className={'List'}>
        {
            data.map((item, i) => {
                const index = i < 10 ? '0' + i : i;
                const element = !item.resource? <div className={dataStyle}>{item}</div>: <a href={item.resource} className={dataStyle}>{item.name}</a>;
                return <div key={index} className={'ListItem'}>
                    <div className={'ListIndex'}>{index}</div>
                    {element}
                </div>
            })
        }
    </div>
}

List.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            link: PropTypes.string
        })).isRequired
    ]),
    dataStyle: PropTypes.string.isRequired
}
