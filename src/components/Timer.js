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
    }, [resetTimer,onTimeEnd]);
    const incraseButtonEvent = () => {
        setSeconds(seconds + timeToAdd)
        if (onIncreaseClicked)
            onIncreaseClicked(); //disable button

    }
    let timerFormat = () => {
        let progress = document.getElementById('pro')
        let progress2 = document.getElementById('pro2')
        let time = document.getElementById('time-o')
        let timeActive = document.getElementById('timermain-active')
        progress2.classList.add('progress-extra')
        timeActive.classList.add('timer-active')
        time.classList.add('time-b')
        progress.classList.add('progress-extra')
    }

    return (
        <div>
            <div >
                <span onClick={timerFormat}><button className='button-29 right-btn' disabled={disableIncreaseTimer} style={increaseButtonStyle} onClick={incraseButtonEvent}  >Get 10 Seconds</button></span>
            </div>
            <h1 id='time-o' className='time-e'>{seconds}</h1>
            <div className='timer-main show-the-time' id='timermain-active'>   <h1 className='timer-sec'><div id='pro' className="progress">
                <div className="color"></div>
            </div></h1></div>
            <div className='timer-main' id='timermain'>   <h1 className='timer-sec'><div id='pro2' className="progress">
                <div className="color"></div>
            </div></h1></div>

        </div>
    )
}

export default Timer;