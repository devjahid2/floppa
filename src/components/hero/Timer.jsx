import React from "react";
import Countdown from "react-countdown";

const Time = ({ value, title }) => {
  return (
    <div className="text-center w-fit">
      <div className="time">
        <h3>{value < 10 && value > -1 ? `0${value}` : value}</h3>
      </div>
      <p>{title}</p>
    </div>
  );
};
const renderer = ({ hours, minutes, seconds }) => {
  return (
    <div className="timer d-flex align-items-center gap-3">
      <Time title={"hours"} value={hours} />
      <Time title={"min"} value={minutes} />
      <Time title={"sec"} value={seconds} />
    </div>
  );
};

const Timer = () => {
  return <Countdown date={"5/7/2023"} renderer={renderer} />;
};

export default Timer;
