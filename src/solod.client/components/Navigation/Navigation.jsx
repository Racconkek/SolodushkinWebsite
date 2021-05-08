import React from "react";
import { Link } from 'react-scroll'

import './Navigation.css';

export default function Navigation({navigation}) {
    return <div className={'NavigationContainer'}>
        <div className={'Navigation'}>
            {navigation.map(item => item.link === 'Home'?
                <a key={item.name} href={'/'} className={'NavigationItem NavigationItemHome'}>{item.name}</a>:
                <Link
                    to={item.link}
                    className={'NavigationItem'}
                    activeClass={'NavigationItemActive'}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    key={item.name}>
                        {item.name}
                    <span className={'NavigationUnderline'}/>
                </Link>)}
        </div>
    </div>
}
