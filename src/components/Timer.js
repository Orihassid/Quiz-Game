import React from 'react'
import { useState, useEffect } from 'react';


const Timer = ({ onTimeEnd, resetTimer, initialSeconds = 30, timeToAdd = 10, increaseButtonStyle, disableIncreaseTimer, onIncreaseClicked }) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        setSeconds(initialSeconds);
        const myInterval = setInterval(() => {

            setSeconds(prev => {
                if (prev > 0) {
                    if (prev - 1 === 0) {
                        if (onTimeEnd)
                            onTimeEnd();
                    }
                    return prev - 1;
                }
                return 0;
            })

        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    }, [resetTimer]);
    const incraseButtonEvent = () => {
        setSeconds(seconds + timeToAdd)
        if (onIncreaseClicked)
            onIncreaseClicked();

    }
    return (
        <div>
            <div >
                <button className='button-29 right-btn' disabled={disableIncreaseTimer} style={increaseButtonStyle} onClick={incraseButtonEvent}  > Extra 10 Seconds </button>
            </div>
            <div className='timer-main'>   <h1 className='timer-sec'>{seconds}</h1></div>
        </div>
    )
}

export default Timer;