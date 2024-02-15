import React, { useState, useEffect } from 'react';
import LeftArrow from '../../assets/images/LeftArrow.svg';
import RightArrow from '../../assets/images/RightArrow.svg';

import './ImgRoller.scss'

function ImgRoller(info) {
    const props = {...info.info}

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let currentImg = document.getElementById(`img${currentIndex}`);
        currentImg.className = 'projet__ctn--roller--img--shown';
    }, [currentIndex]);

    return (
        <div className="projet__ctn--roller" id={props.id}>
            {props.imagesRoller.map((imgLink, index) => (
                <img
                    key={index}
                    alt="house imgs"
                    className={`projet__ctn--roller--img ${currentIndex === index ? 'projet__ctn--roller--img--shown' : 'projet__ctn--roller--img--hidden'}`}
                    src={imgLink}
                    id={`img${index}`}
                />
            ))}
            <img
                className="projet__ctn--roller--arrowLeft"
                src={LeftArrow}
                alt="left arrow"
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + props.imagesRoller.length) % props.imagesRoller.length)}
            />
            <img
                className="projet__ctn--roller--arrowRight"
                src={RightArrow}
                alt="right arrow"
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % props.imagesRoller.length)}
            />
        </div>
    );
}

export default ImgRoller;