import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question = 'Без какой ягоды не обходится ни один твой день рождения?'
const answer = ['арбуз']

export const Question12 = () => {
    const [success, setSuccess] = useState<boolean>(false)

    if (success) return <Answer />

    return (
        <div>
            <QuestionTitle question={question} />
            <CheckForm answer={answer} onSuccess={() => setSuccess(true)} />
        </div>
    )
}

const Answer = () => {
    const navigate = useNavigate()

    return (
        <div className="answer">
            <QuestionTitle question="По традиции, которую ввёл папа - день рождения не обходится без арбуза" />
            <div className="answer-photo answer-photo-12"></div>
            <button onClick={() => navigate('/question/13')}>
                Идём дальше
            </button>
        </div>
    )
}
