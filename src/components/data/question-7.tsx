import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question = 'Что у тебя в школе получалось лучше остальных девочек?'
const answer = ['плести кружево', 'кружево', 'кружева', 'плетение кружева']

export const Question7 = () => {
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
            <QuestionTitle question="Плетение кружева" />
            <div className="answer-photo answer-photo-7"></div>
            <button onClick={() => navigate('/question/8')}>Идём дальше</button>
        </div>
    )
}
