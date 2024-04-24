import { useState, useCallback } from "react"

import QUESTIONS from "../question"
import quizCompleteImg from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer";

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer){
            console.log(selectedAnswer);
            setUserAnswers ((prevUserAnswers) => {
                 return [...prevUserAnswers, selectedAnswer];
            });
            console.log(userAnswers);
        },
    []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} />
                <h2>Yeayyy Kuis beres !!</h2>
            </div>
        );
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(()=> Math.random() - 0.5);

    return(
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                timeout={10000}
                onTimeout={() => handleSelectAnswer(null)} />

                <p>{QUESTIONS[activeQuestionIndex].text}</p>

                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer)=>(
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}