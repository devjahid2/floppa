import React from 'react';
import Button from '../Button/Button';

const Input = ({type,placeholder,defaultValue,button}) => {
    return (
        <div className="d-flex align-items-center position-relative">
            <input className='input-amount' type={type} placeholder={placeholder} defaultValue={defaultValue} />
            {
                button ? <Button className={'buy-btn'} text={'Buy'}/> : ''
            }
        </div>
    );
}

export default Input;