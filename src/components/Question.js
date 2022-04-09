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
const Question = ({ quest, onAnswer, disableFiftyFifty, FiftyFiftyStyle, onFiftyFiftyClicked }) => {

    const [formatAns, setFormatAns] = useState([]);
    let formatQuest = htmlDecodeQuest(quest.question)
    useEffect(() => {
        const answers = [...quest.incorrect_answers];
        answers.push(quest.correct_answer);
        let formatAnswers = htmlDecodeAns(answers)
        shuffleArray(formatAnswers)
        formatAnswers = formatAnswers.map((ans) => {
            return { ans: ans, disabled: false, correct: quest.correct_answer == ans }
        })
        setFormatAns(formatAnswers)
    }, [quest])
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
    disableFiftyFifty = disableFiftyFifty  || quest.type != "multiple"

    return <div>

        <div className="question-heading"> <h1 >{formatQuest}</h1></div>
        {formatAns.map((ans, index) => <button className="question-option" hidden={ans.disabled} key={index} onClick={() => { onAnswer(ans.ans) }}>{ans.ans}</button>)}
        {<div>
            {<button className="button-29 left-btn" id="fifty-btn" disabled={disableFiftyFifty} style={FiftyFiftyStyle} onClick={fiftyFiftyEvent}>50:50</button>}
        </div>}
    </div>

}

export default Question