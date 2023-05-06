import React from 'react';
import { images } from '../../assets/images/images';

const Navbar = () => {
    return (
        <div className='d-flex align-items-start justify-content-between py-3'>
            <img src={images.logo} alt="logo" className="logo" />

            <button className="wallet d-flex align-items-center gap-2">
                <img src={images.wallet} alt="wallet" />
                Connect wallet 
            </button>
        </div>
    );
}

export default Navbar;
