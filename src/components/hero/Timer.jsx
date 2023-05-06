import React from 'react';

const Timer = ({title,value}) => {
    return (
        <div className="text-center w-fit">
            <div className="time">
                <h3>{value}</h3>
            </div>
            <p>{title}</p>
        </div>
    );
}

export default Timer;
