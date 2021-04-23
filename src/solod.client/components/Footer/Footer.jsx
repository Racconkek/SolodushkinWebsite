import React from "react";

import './Footer.css';

export default function Footer() {
    return <footer className={'Footer'}>
        <div className={'FooterDescription'}>
            <span>Разработка — Людмила Мирошниченко</span>
            <br/>
            <span>Дизайн — Мария Мельникова</span>
            <br/><br/>
            <span>2021</span>
        </div>
        <a className={'Link'} href={''}>Вход в админ панель</a>
    </footer>
}
