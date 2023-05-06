import React from 'react';

const SocialButton = ({img,title,url}) => {
    return (
        <a href={url} className='d-flex gap-2 align-items-center social-button'>
            <img src={img} alt="social" />
            <p className='ttu'>{title}</p>
        </a>
    );
}

export default SocialButton;
