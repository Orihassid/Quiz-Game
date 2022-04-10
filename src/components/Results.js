import React from 'react'
import Icon1 from '../assets/icons/icon-1.png'
import Icon2 from '../assets/icons/icon-2.png'
import Icon3 from '../assets/icons/icon-3.png'
import Icon4 from '../assets/icons/icon-4.png'

import '../assets/css/result.css'
const Results = (props) => {

    let handleResults = () => {
        let hidemodal = document.getElementById('modal-hide')
        let showmodal = document.getElementById('modal-show')
        hidemodal.classList.add('hidden')
        hidemodal.classList.remove('show-modal')
        showmodal.classList.add('show-modal')
        let number = props.correct
        if (number > 4) {
            let win = document.getElementById('win-animation')
            win.classList.add('show-ico')
        }
        else {
            let lost = document.getElementById('lost-animation')
            lost.classList.add('show-ico')    
        }
    }
    return (
        <div className="box">
            <div className="modal-container" id="m1-o" style={{ Background: 'transparent' }}>

                <div id='win-animation' className='win'>
                    <section>
                        <div className="set">
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>

                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>

                        </div>
                        <div className="set set2">
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>

                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>

                        </div>
                        <div className="set set3">
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>

                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>
                            <div><img style={{ width: '100px' }} src={Icon4} /></div>

                        </div>
                    </section>
                </div>
                <div id='lost-animation' className='lost '>
                    <section>
                        <div className="set">
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>

                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>

                        </div>
                        <div className="set set2">
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>

                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>

                        </div>
                        <div className="set set3">
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>

                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>
                            <div><img style={{ width: '100px' }} src={Icon1} /></div>

                        </div>
                    </section>
                </div>

                <div className="modal">
                    <div id='modal-show' className='hidden'>
                        <h1 className="modal__title">Results</h1>
                        <p className="modal__text" id='correct-answer' >Correct Answers: <span>{props.correct}</span></p>
                        <p className="modal__text">Wrong Answers: {props.numOfQustions - 1 - props.correct} </p>
                        <p className="modal__text">Your score: {props.score} </p>
                    </div>
                    <div id='modal-hide' className='show-modal'>
                        <h1 className="modal__title">Quiz Finished</h1>
                        <div className="start-btn"><div><button onClick={handleResults} className="button-64"> <span className='text'>Show Result</span> </button></div> </div>
                    </div>
                    <div className="start-btn"><div><button onClick={props.playAgain} className="button-64"> <span className='text'>Restart</span> </button></div> </div>
                </div>
            </div>
        </div >

    )
}

export default Results;





