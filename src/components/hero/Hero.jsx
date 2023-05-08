import React from 'react';
import { images } from '../../assets/images/images';
import Timer from './Timer';
import Button from '../Button/Button';



const Hero = () => {
    return (
        <div className='row flex-column-reverse flex-lg-row'>
            <div className="col-md-5 position-relative">
                <img className='w-100' src={images.floppa_money} alt="floppa money" />
                <img className="sun_img" src={images.sun} alt="sun" />
            </div>
            <div className="col-md-7">
            <div className="position-relative">
                <img className='title' src={images.title} alt="title" />
                <img src={images.spring} className='spring-top position-absolute' alt="spring" />
                <img src={images.spring} className='spring-bottom position-absolute' alt="spring" />
            </div>
            <div className="hero-content">
                {/* <p className='font-16'>Coming soon</p> */}
                <div className="remaining d-flex align-items-center gap-5">
                    <Timer/>
       <Button/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Hero;
