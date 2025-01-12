"use client"
import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
<div className="text-black text-center font-bold text-xl uppercase flex gap-10 justify-center">
        <div><span>{days}</span>
        <p>days</p></div>
        <div><span>{hours}</span>
        <p>hours</p></div>
        <div><span>{minutes}</span>
        <p>min</p></div> 
        <div><span>{seconds}</span>
        <p>sec</p></div> 
      </div>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 6000000);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}