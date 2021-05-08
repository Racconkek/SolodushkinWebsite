import React from 'react';

import { ApiService } from "../../../apiService";

import './Home.css';
import homeBiography from '../../../../assets/photo/homeBioraphy.png';

import Preview from "./Preview/Preview.jsx";
import Block from "../../Block/Block.jsx";
import List from "../../List/List.jsx";
import Slider from "../../Slider/Slider.jsx";
import UnderlineLink from "../../UnderLineLink/UnderlineLink.jsx";
import Contacts from "../../Contacts/Contacts.jsx";
import Footer from "../../Footer/Footer.jsx";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            publications: [],
            biographyText: '',
            conferences: [],
            isLoading: true
        }
    }

    async componentDidMount() {
        const projects = await ApiService.getData('/projects');
        const publications = await ApiService.getData('/publications');
        const biographyText = await ApiService.getData('/biography/preview');
        const conferences = await ApiService.getData('/conferences');
        if (!projects || !publications || !biographyText || !conferences) {
            console.log('fail to load data:', 'projects: ', projects, 'publications: ', publications, 'bio: ', biographyText, 'conf: ', conferences);
            return;
        }
        this.setState({
            projects: projects.data,
            publications: publications.data,
            biographyText: biographyText.data.data,
            conferences: conferences.data,
            isLoading: false
        });
    }

    render() {
        return this.state.isLoading? <div className={'Loading Page'}>Loading</div>:<div className={'Page'}>
            <Preview/>
            <Block title={'Курсы'} id={'HomeCourses'}>
                <div className={'HomeCoursesContainer'}>
                    <span className={'BlockLargeText HomeCoursesTitles'}>JavaScript</span>
                    <span className={'BlockLargeText HomeCoursesTitles'}>Протоколы интернета</span>
                    <span className={'BlockLargeText HomeCoursesTitles'}>Web & DHTML</span>
                </div>
            </Block>
            <div className={'HomeBiographyContainer'} id={'HomeBiography'}>
                <Block title={'Биография'}>
                    <article className={'BlockSmallText'}>
                        {this.state.biographyText.replace(/\\n/g, '\n\n')}
                        <br/><br/><br/>
                        <UnderlineLink link={'/bio'} data={'Читать далее'}/>
                    </article>
                </Block>
                <img src={homeBiography} alt={'bio'} className={'HomeBiographyPhoto'}/>
            </div>
            <Block title={'Публикации'} id={'HomePublications'}>
                <List data={this.state.publications} dataStyle={'Link'}/>
                <br/>
                <UnderlineLink link={''} data={'Смотреть все'}/>
            </Block>
            <Block title={'Конференции'} id={'HomeConferences'}>
                <Slider data={this.state.conferences}/>
            </Block>
            <Block title={'Проекты'} id={'HomeProjects'}>
                <List data={this.state.projects} dataStyle={'Link'}/>
                <br/>
                <UnderlineLink link={''} data={'Смотреть все'}/>
            </Block>
            <Contacts/>
            <Footer/>
        </div>;
    }
}
