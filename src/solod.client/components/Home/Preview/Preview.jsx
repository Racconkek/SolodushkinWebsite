import React from 'react';

import main from "../../../../assets/photo/main.png";
import './Preview.css';

export default function Preview() {
    return <React.Fragment>
        <div className={'MainImageContainer'}>
            <img src={main} alt={'main'} className={'MainImage'}/>
            <svg viewBox={'0 0 450 80'} className={'MainSurname'}>
                <text x="380" y="65" textAnchor="end" fontSize="67" fill="none" strokeWidth="1" stroke="#fafafa"
                      fontFamily="San Francisco Pro Display Regular">Солодушкин
                </text>
            </svg>
        </div>
        <svg viewBox="0 0 750 80" className={'MainName'}>
            <text x="680" y="65" textAnchor="end" fontSize="67" fill="#272727"
                  fontFamily="San Francisco Pro Display Regular">Святослав Игоревич
            </text>
        </svg>
    </React.Fragment>
}
