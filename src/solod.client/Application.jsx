import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './Application.css';

import Home from './components/Pages/Home/Home.jsx';
import RoutePage from "./components/Pages/RoutePage/RoutePage.jsx";
import Biography from "./components/Pages/Biography/Biography.jsx";

export default function Application() {
    return <div className={'Application'}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <RoutePage navigation={[
                        {name: 'Курсы', link: 'HomeCourses'},
                        {name: 'Биография', link: 'HomeBiography'},
                        {name: 'Публикации', link: 'HomePublications'},
                        {name: 'Конференции', link: 'HomeConferences'},
                        {name: 'Проекты', link: 'HomeProjects'},
                        {name: 'Контакты', link: 'Contacts'},
                    ]}>
                        <Home/>
                    </RoutePage>
                </Route>
                <Route path={'/bio'}>
                    <RoutePage navigation={[
                        {name: 'Главная', link: 'Home'},
                        {name: 'Образование', link: 'Education'},
                        {name: 'Работа', link: 'Job'},
                        {name: 'Квалификация', link: 'Qualification'},
                        {name: 'Увлечения', link: 'Interests'},
                        {name: 'Гранты и награды', link: 'Grants'},
                        {name: 'Документы', link: 'Documents'},
                        {name: 'Контакты', link: 'Contacts'}
                    ]}>
                        <Biography/>
                    </RoutePage>
                </Route>
            </Switch>
        </Router>
    </div>
}



