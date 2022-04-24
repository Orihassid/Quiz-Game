import React, { useEffect, useState } from "react"

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function htmlDecodeQuest(input) {
    let e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function htmlDecodeAns(arr) {
    let decodeAns = []
    for (let i = 0; i < arr.length; i++) {
        let e = document.createElement('textarea');
        e.innerHTML = arr[i];
        // handle case of empty input
        decodeAns.push(e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue)
    }
    return decodeAns

}
const Question = ({ quest, onAnswer, disableFiftyFifty, FiftyFiftyStyle, onFiftyFiftyClicked, numOfQuestion, totalNumOfQuestion, showColors = false }) => {

    const [formatAns, setFormatAns] = useState([]);
    let formatQuest = htmlDecodeQuest(quest.question)
    const showAnswersColors = () => {
        let answers = [...formatAns]
        for (let ans of answers) {
            ans.color = ans.correct ? 'green' : 'red';
        }
        setFormatAns(answers)// render again with the right colors
    }

    useEffect(() => {
        const answers = [...quest.incorrect_answers];
        answers.push(quest.correct_answer);
        let formatAnswers = htmlDecodeAns(answers)
        shuffleArray(formatAnswers)
        formatAnswers = formatAnswers.map((ans) => {
            return { ans: ans, disabled: false, correct: quest.correct_answer == ans, color: null }
        })
        setFormatAns(formatAnswers)
    }, [quest])

    useEffect(() => {
        if (showColors)
            showAnswersColors();
    }, [showColors])

    const handleFiftyFifty = () => {
        const answers = [...formatAns];
        let counter = 2;
        for (let ans of answers) {
            if (!ans.correct && counter > 0) {
                counter -= 1;
                ans.disabled = true;
            }
        }
        setFormatAns(answers);
    }
    const fiftyFiftyEvent = () => {

        handleFiftyFifty();
        if (onFiftyFiftyClicked)
            onFiftyFiftyClicked();
    }
    disableFiftyFifty = disableFiftyFifty || quest.type != "multiple" // only if we are in mulitple question
    const handleClick = (ans) => {
        showAnswersColors()
        onAnswer(ans.ans)
    }
    let runGreenTimeLine = () => {
        let progress = document.getElementById('pro')
        let progress2 = document.getElementById('pro2')
        let time = document.getElementById('time-o')
        let timeActive = document.getElementById('timermain-active')
        timeActive.classList.remove('timer-active')
        time.classList.remove('time-b')
        progress.classList.remove('progress-extra')
        progress2.classList.remove('progress-extra')
        let timeMain = document.getElementById('timermain')
        timeMain.classList.toggle('show-the-time')
        timeActive.classList.toggle('show-the-time')


    }
    return <div>
        <h3 style={{ color: '#734abae6' }} > {numOfQuestion + 1}/{totalNumOfQuestion}</h3>
        <div className="question-heading"> <h1 >{formatQuest}</h1></div>
        {formatAns.map((ans, index) => <span key={index} onClick={runGreenTimeLine}><button className="question-option" style={{ backgroundColor: ans.color }} hidden={ans.disabled} key={index} onClick={() => { handleClick(ans) }}>{ans.ans}</button></span>)}
        {<div>
            {<button className="button-29 left-btn" id="fifty-btn" disabled={disableFiftyFifty} style={FiftyFiftyStyle} onClick={fiftyFiftyEvent}>50:50</button>}
        </div>}
    </div>

}
export default Question