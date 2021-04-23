import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Navigation from "./components/Navigation/Navigation.jsx";

import './Application.css';
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function Application() {
    return <div className={'Application'}>
        <Navigation/>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
        <Contacts/>
        <Footer/>
    </div>
}



