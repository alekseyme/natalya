import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question = 'ТБВ. 1 сезон, 2 серия, 12:54'
const answer = ['Сарказм', 'Sarcasm']

export const Question3 = () => {
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
            <QuestionTitle question="Табличка Сарказм" />
            <div className="answer-photo answer-photo-3"></div>
            <button onClick={() => navigate('/question/4')}>Идём дальше</button>
        </div>
    )
}
