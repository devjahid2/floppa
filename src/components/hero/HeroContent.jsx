import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Input from '../input/Input';
import { images } from '../../assets/images/images';
import Button from '../Button/Button';

const HeroContent = () => {
    return (
        <div className="hero-content">
                <h2 className='head-text mb-4'>Swap</h2>
            <div className="d-flex align-items-center gap-3">
                    <Input className={'w-50'} defaultValue={'00.00'} placeholder={'00.00'}/>
                    <Dropdown className='w-50'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div>
                        <img className='eth' src={images.eth} alt="eth"  /> ETH
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item className='d-flex align-items-center gap-3' href="#/action-1">
                        <img className='eth' src={images.eth} alt="eth"  /> ETH
                    </Dropdown.Item>
                    <Dropdown.Item className='d-flex align-items-center gap-3' href="#/action-1">
                        <img className='eth' src={images.eth} alt="eth"  /> ETH
                    </Dropdown.Item>
                    <Dropdown.Item className='d-flex align-items-center gap-3' href="#/action-1">
                        <img className='eth' src={images.eth} alt="eth"  /> ETH
                    </Dropdown.Item>
                </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="d-flex align-items-center justify-content-between gap-3 mt-4">
                    <div className="border-line"></div>
                    <img className='arrow position-relative' src={images.arrow_up_down} alt="arrow" />
                    <div className="border-line"></div>
                </div>
                <div className="balance">
                    <p>Balance: <span>0 $FLOP</span></p>
                    <div className="d-flex align-items-center gap-3">
                    <Input className={'w-50'} defaultValue={'00.00'} placeholder={'00.00'}/>
                    <div className="div w-50 d-flex align-items-center gap-3 profile">
                        <img src={images.floppa_profile} className='profile' alt="profile" /><p>Floppa</p>
                    </div>
                    </div>
                </div>
                <Button text={'Buy now'} className={'mt-4 w-100'}/>
                <div className="d-flex align-items-center gap-3 mt-4">
                    <Input className={'w-50'} defaultValue={'00.00'} placeholder={'00.00'}/>
                    <Button text={'Claim'} className={'buy-btn w-50'}/>
                </div>
        </div>
    );
}

export default HeroContent;
