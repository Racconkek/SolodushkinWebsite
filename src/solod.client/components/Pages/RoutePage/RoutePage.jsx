import React from "react";

import './RoutePage.css';
import Contacts from "../../Contacts/Contacts.jsx";
import Footer from "../../Footer/Footer.jsx";
import Navigation from "../../Navigation/Navigation.jsx";

export default function RoutePage({children, navigation}) {
    return <div className={'RoutePage'}>
        <Navigation navigation={navigation}/>
        {children}
    </div>
};
