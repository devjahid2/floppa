import React from 'react';

const Button = ({className,text}) => {
    return (
        <button className={`${className} connect-wallet`}>{text}</button>
    );
}

export default Button;
