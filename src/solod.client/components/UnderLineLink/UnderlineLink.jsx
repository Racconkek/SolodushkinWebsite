import React from "react";

import './UnderlineLink.css';

export default function UnderlineLink({data, link}) {
    return <a href={link} className={'UnderlineLink'}>
            {data}
            <span className={'Underline'}/>
        </a>
}
