import React from 'react';
import Container from './../components/container/Container';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import CommingSoon from '../components/commingSoon/CommingSoon';
import Social from '../components/Social/Social';
import { images } from '../assets/images/images';

const Home = () => {
    return (
        <>
            <Container>
            <Navbar/>
            <Hero/>
            <CommingSoon/>
            <Social/>
        </Container>
        
        <img src={images.wave_left} className='position-absolute left-0 bottom-0' alt="wave_left" />
        <img src={images.wave_right} className='position-absolute right-0 bottom-0' alt="wave_left" />
        <img src={images.t_shart_floppa} className='position-absolute right-0 bottom-0' alt="wave_left" />
        </>
    );
}

export default Home;
