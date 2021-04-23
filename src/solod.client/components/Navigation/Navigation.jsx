import React from "react";

import './Navigation.css';

export default function Navigation() {
    return <div className={'NavigationContainer'}>
        <div className={'Navigation'}>
            <a className={'NavigationItem'}>Курсы</a>
            <a className={'NavigationItem'}>Биография</a>
            <a className={'NavigationItem'}>Публикации</a>
            <a className={'NavigationItem'}>Конференции</a>
            <a className={'NavigationItem'}>Проекты</a>
            <a className={'NavigationItem'}>Контакты</a>
        </div>
    </div>
}
