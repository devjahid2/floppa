import React from 'react';
import Button from '../Button/Button';

const Input = ({type,placeholder,defaultValue,button,className}) => {
    return (
        <div className={`${className} d-flex align-items-center position-relative`}>
            <input className={`input-amount`} type={type ? type : 'text'} placeholder={placeholder} defaultValue={defaultValue} />
            {
                button ? <Button className={'buy-btn position-absolute'} text={'Buy'}/> : ''
            }
        </div>
    );
}

export default Input;