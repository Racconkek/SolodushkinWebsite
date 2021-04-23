import React from 'react';

import './Home.css';
import homeBiography from '../../../assets/photo/homeBioraphy.png';
import conference0 from '../../../assets/photo/conference0.png';
import conference1 from '../../../assets/photo/conference1.png';
import conference2 from '../../../assets/photo/conference2.png';

import Preview from "./Preview/Preview.jsx";
import Block from "../Block/Block.jsx";
import List from "../List/List.jsx";
import Slider from "../Slider/Slider.jsx";
import Contacts from "../Contacts/Contacts.jsx";

const publications = [
    'Crank–Nicolson Numerical Algorithm for Nonlinear Partial Differential Equation with Heredity and Its Program Implementation',
    'Difference Scheme for Partial Differential Equations of Fractional Order with a Nonlinear Differentiation Operator',
    'Nonlinear difference scheme for fractional equation with functional delay',
    'Third Order Iterative Method for Nonlinear Difference Schemes',
    'Влияние профессиональных факторов риска на развитие нижепоясничного болевого синдрома у рабочих промышленных предприятий'
];

const conferencePhotos = [conference0, conference1, conference2];
const conferenceDescriptions = [
    {
        title: '8-я Конференция "Прикладная математика и научные вычисления"',
        data: '10-14 июня, 2013',
        place: 'Хорватия, Шибеник'
    },
    {
        title: 'XIX Всероссийская конференция, посвященная памяти К.И. Бабенко ' +
            '"Теоретические основы и конструирование численных алгоритмов решения задач математической физики"',
        data: '10-16 сентября, 2012',
        place: 'Новороссийск'
    },
    {
        title: '14-я Конференция "Методы вычислений и интеллектуальные системы"',
        data: '1-3 июля, 2012',
        place: 'Португалия'
    }
];

const projects = [
    'Достижение целевых позиций в предметных рейтингах QS',
    'Создание и развитие Центра фундаментальной биотехнологии и биоинженерии',
    'Математическое моделирование в физиологии и медицине с использованием суперкомпьютерных технологий'
];

export default function Home() {
    return <div className={'Home'}>
        <Preview/>
        <Block title={'Курсы'}>
            <div className={'HomeCoursesContainer'}>
                <span className={'BlockLargeText HomeCoursesTitles'}>JavaScript</span>
                <span className={'BlockLargeText HomeCoursesTitles'}>Протоколы интернета</span>
                <span className={'BlockLargeText HomeCoursesTitles'}>Web & DHTML</span>
            </div>
        </Block>
        <div className={'HomeBiographyContainer'}>
            <Block title={'Биография'}>
                <article className={'BlockSmallText'}>
                    Солодушкин Святослав Игоревич родился 30 мая 1983 в Екатеринбурге.
                    <br/><br/>
                    Окончил математико-механический факультет УрГУ.
                    <br/><br/>
                    В настоящий момент - доцент кафедры вычислительной математики Уральского федерального университета
                    им. Б.Н.Ельцина и главный программист отдела дифференциальных уравнений
                    Института математики и механики УрО РАН.
                    <br/><br/>
                    Стаж работы по специальности - 16 лет.
                    <br/><br/><br/>
                    <a className={'Link'} href={''}>Читать далее</a>
                </article>
            </Block>
            <img src={homeBiography} alt={'bio'} className={'HomeBiographyPhoto'}/>
        </div>
        <Block title={'Публикации'}>
            <List data={publications} dataStyle={'Link'}/>
            <br/>
            <a className={'Link'} href={''}>Смотреть все</a>
        </Block>
        <Block title={'Конференции'}>
            <Slider photos={conferencePhotos} descriptions={conferenceDescriptions}/>
        </Block>
        <Block title={'Проекты'}>
            <List data={projects} dataStyle={'Link'}/>
            <br/>
            <a className={'Link'} href={''}>Смотреть все</a>
        </Block>
    </div>;
}
