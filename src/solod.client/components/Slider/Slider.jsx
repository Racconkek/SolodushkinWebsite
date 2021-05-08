import React from "react";

import {useState} from "react";
import PropTypes from 'prop-types';

import './Slider.css';
import leftArrow from '../../../assets/photo/leftArrow.svg';
import rightArrow from '../../../assets/photo/rightArrow.svg';


export default function Slider({data}) {
    const [current, setCurrent] = useState(0);

    const changePhoto = (direction) => {
        if (direction === 'left') {
            setCurrent((current - 1 + data.length) % data.length);
        } else if (direction === 'right') {

            setCurrent((current + 1) % data.length);
        }
    }

    return <div className={'Slider'}>
        <div className={'SliderPhotoContainer'}>
            <img src={`photo/${data[current].photo}`} alt={'photo'}/>
            <img src={leftArrow} alt={'leftArrow'} className={'LeftArrow'} onClick={() => changePhoto('left')}/>
            <img src={rightArrow} alt={'rightArrow'} className={'RightArrow'} onClick={() => changePhoto('right')}/>
        </div>
        <div className={'SliderCaption'}>
            <div className={'Caption'}>
                {current < 10 ? '0' + (current + 1) : current + 1} / {data.length < 10 ? '0' + data.length : data.length}
            </div>
            <div className={'SliderDescription'}>
                <div className={'BlockSmallText SliderDescriptionTitle'}>{data[current].description}</div>
                <br/>
                <div className={'Caption'}>{data[current].date}</div>
                <div className={'Caption'}>{data[current].place}</div>
            </div>
        </div>
    </div>
}

Slider.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        date: PropTypes.string,
        place: PropTypes.string,
        photo: PropTypes.string
    })).isRequired
}
