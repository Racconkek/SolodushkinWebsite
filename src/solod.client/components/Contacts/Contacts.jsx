import React from "react";

import './Contacts.css';
import Block from "../Block/Block.jsx";

export default function Contacts() {
    return <div className={'Contacts'} id={'Contacts'}>
        <span className={'BlockTitle'}>Контакты</span>
        <div className={'ContactsContent BlockLargeText'}>
            <div className={'ContactsPart'}>
                <span className={'ContactsItem'}>+7 (343) 350 75 72</span>
                <span className={'ContactsItem'}>s.i.solodushkin@urfu.ru</span>
                <span className={'BlockSmallText ContactsItem'}>Тургенева 4, каб. 613</span>
            </div>
            <div className={'ContactsPart'}>
                <a className={'ContactsItem'}>VK</a>
                <a className={'ContactsItem'}>Facebook</a>
                <a className={'ContactsItem'}>Instagram</a>
                <a className={'ContactsItem'}>YouTube</a>
            </div>
        </div>
    </div>
}
