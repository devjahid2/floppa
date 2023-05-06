import React from 'react';
import SocialButton from './SocialButton';
import { images } from '../../assets/images/images';


const Social = () => {
    return (
        <div className='d-flex flex-column justify-content-md-center flex-md-row align-items-start align-items-md-center justify-content-start gap-3 mt-5'>
            <SocialButton url={'https://domain.com'} img={images.talegram} title={'Telegram'}/>
            <SocialButton url={'https://domain.com'} img={images.twitter} title={'Twitter'}/>
            <SocialButton url={'https://domain.com'} img={images.medium} title={'Medium'}/>
            <SocialButton url={'https://domain.com'} img={images.book} title={'Book'}/>
        </div>
    );
}

export default Social;
