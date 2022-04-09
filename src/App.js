import React, { useState, useEffect } from "react"
import "./App.css"
import Question from "./components/Question"
import Timer from "./components/Timer"
import Results from "./components/Results"
import './assets/css/style.css'

function compare(a, b) {
  const arr = ['easy', 'medium', 'hard'];
  const a_val = arr.findIndex((str) => str == a.difficulty)
  const b_val = arr.findIndex((str) => str == b.difficulty)
  return a_val - b_val;
}

const App = () => {
  const [gameStarted, setGameStarted] = useState(true)
  const [questions, setQuestions] = useState([])
  const [questionNumber, setQuestionNumber] = useState(0)
  const [resetTimer, setResetTimer] = useState(false);
  const [correctAns, setCorrectAns] = useState(0)
  const [gameState, setGameState] = useState(false);
  const [name, setName] = useState("")
  const [resultState, setResultState] = useState(false)
  const [disableAddTime, setDisableAddTime] = useState(false)
  const [disableFiftyFifty, setDisablefiftyFifty] = useState(false)
  const [showAnsColors,setShowAnsColors] = useState(false);

  const [score, setScore] = useState(0)
  const reset_timer = () => {
    setResetTimer(!resetTimer);
  }
  const fetchQuests = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=100")
    const data = await response.json()
    let arr = data.results.splice(0,10)
    arr.sort(compare);//sort by difficulty
    setQuestions(arr)
  }
  useEffect(() => {
    fetchQuests();
  }, [])

  const onAnswer = (ans) => {

    setTimeout(()=>
    {
      const quest = questions[questionNumber];
      if (quest.correct_answer === ans) {
        setCorrectAns(correctAns + 1)
        setScore(score + 10);
      }
      if (questionNumber === questions.length - 1) {
        setResultState(true)
        setGameState(false)
        setDisableAddTime(false)
        setDisablefiftyFifty(false)
      }
      else
        nextQuestion();
    },1000)
    
  }
  const nextQuestion = () => {
    setShowAnsColors(false)
    if (questionNumber == questions.length - 1) {
      setResultState(true)
      setGameState(false)
      setDisableAddTime(false)
      setDisablefiftyFifty(false)
      return;
    }
    reset_timer()
    setQuestionNumber(prev => {
      if (prev + 1 < questions.length)
        return prev + 1;
      return prev;
    })
  }

  const onPlayAgain = async () => {
    await fetchQuests();
    setQuestionNumber(0)
    reset_timer();
    setGameState(false);
    setResultState(false)
    setGameStarted(true)
  }
  const handleStartQuiz = () => {
    setGameStarted(false)
    setGameState(true)
    console.log('here')

  }
  const handleTimeEnd = ()=>
  {
    setShowAnsColors(true)
    setTimeout(()=>
    {
      nextQuestion();
    },1000)

  }

  const increaseButtonStyle = {
    color: 'red',
    position: 'absolute',
    left: '70%',
    top: '90%',
  }

  const fiftyStyle = {
    color: 'red',
    position: 'absolute',
    left: '25%',
    top: '90%',
  }
  return (
    <div className="main-home">
      <h1 className="quiz-title">Quiz Meeeee</h1>
      {gameStarted && (
        <div>
          <p className="quiz-description">{`The quiz contains ${questions.length} questions`}</p>
          <input  className="input-name" type="text" onChange={(e) => setName(e.target.value)} value={name}
          placeholder="Enter Player Name" />
          <div className="start-btn"><div><button className="button-64" onClick={() => handleStartQuiz()} > <span className="text">Start Quiz</span>  </button> </div>   </div></div>)}


      {gameState && <div className="question-main"> <div className="name-title">Good luck <span className="player-name"> {name}</span></div>
        {questions.length > 0 && <Timer resetTimer={resetTimer} onIncreaseClicked={() => {setDisableAddTime(true) }}
          onTimeEnd={handleTimeEnd} increaseButtonStyle={increaseButtonStyle} disableIncreaseTimer={disableAddTime} />}
        {questionNumber < questions.length &&
          <Question showColors={showAnsColors} numOfQuestion = {questionNumber} totalNumOfQuestion = {questions.length} disableFiftyFifty={disableFiftyFifty} onFiftyFiftyClicked={() => {setDisablefiftyFifty(true) }} 
          FiftyFiftyStyle={fiftyStyle} quest={questions[questionNumber]} onAnswer={onAnswer} />}

      </div>}
      {resultState && <Results correct={correctAns} numOfQustions={questions.length + 1} score={score} playAgain={onPlayAgain}> </Results>}
    </div>)
}


export default App
