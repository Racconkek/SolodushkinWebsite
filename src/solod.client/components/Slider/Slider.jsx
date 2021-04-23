import React from "react";

import {useState} from "react";
import PropTypes from 'prop-types';

import './Slider.css';
import leftArrow from '../../../assets/photo/leftArrow.svg';
import rightArrow from '../../../assets/photo/rightArrow.svg';


export default function Slider({photos, descriptions}) {
    const [current, setCurrent] = useState(0);

    const changePhoto = (direction) => {
        if (direction === 'left') {
            setCurrent((current - 1 + photos.length) % photos.length);
        } else if (direction === 'right') {

            setCurrent((current + 1) % photos.length);
        }
    }

    return <div className={'Slider'}>
        <div className={'SliderPhotoContainer'}>
            <img src={photos[current]} alt={'photo'}/>
            <img src={leftArrow} alt={'leftArrow'} className={'LeftArrow'} onClick={() => changePhoto('left')}/>
            <img src={rightArrow} alt={'rightArrow'} className={'RightArrow'} onClick={() => changePhoto('right')}/>
        </div>
        <div className={'SliderCaption'}>
            <div className={'Caption'}>
                {current < 10 ? '0' + (current + 1) : current + 1} / {photos.length < 10 ? '0' + photos.length : photos.length}
            </div>
            <div className={'SliderDescription'}>
                <div className={'BlockSmallText SliderDescriptionTitle'}>{descriptions[current].title}</div>
                <br/>
                <div className={'Caption'}>{descriptions[current].data}</div>
                <div className={'Caption'}>{descriptions[current].place}</div>
            </div>
        </div>
    </div>
}

Slider.propTypes = {
    photos: PropTypes.array.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        data: PropTypes.string,
        place: PropTypes.string
    }))
}
