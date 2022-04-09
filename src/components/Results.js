import React from 'react'
import Icon1 from '../assets/icons/icon-1.png'
import Icon2 from '../assets/icons/icon-2.png'
import Icon3 from '../assets/icons/icon-3.png'
import Icon4 from '../assets/icons/icon-4.png'
import '../assets/css/modal.css'
const Results = (props) => {
    return (
        // <div>
        //     <h1>
        //         Results:
        //     </h1>
        //     <h3>Correct Answers: {props.correct} </h3>
        //     <h3>Wrong Answers: {props.numOfQustions - 1 - props.correct} </h3>
        //     <h3>your score: {props.score} </h3>
        //     <button onClick={props.playAgain} >click to play again</button>

        // </div>



        <div className="box">

            <div className="modal-container" id="m1-o" style={{ Background: 'transparent' }}>
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
                <div className="modal">
                    <h1 className="modal__title">Results</h1>
                    <p className="modal__text">Correct Answers: {props.correct}</p>
                    <p className="modal__text">Wrong Answers: {props.numOfQustions - 1 - props.correct} </p>
                    <p className="modal__text">Your score: {props.score} </p>
                    <div className="start-btn"><div><button onClick={props.playAgain} className="button-64"> <span className='text'>Restart</span> </button></div> </div>

                </div>
            </div>
        </div >

    )
}

export default Results;





