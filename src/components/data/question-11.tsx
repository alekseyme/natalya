import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question = 'Что за черным квадратом?'
const answer = ['планшет']

export const Question11 = () => {
    const [success, setSuccess] = useState<boolean>(false)

    if (success) return <Answer />

    return (
        <div>
            <QuestionTitle question={question} />
            <div className="answer-photo answer-photo-11-q"></div>
            <CheckForm answer={answer} onSuccess={() => setSuccess(true)} />
        </div>
    )
}

const Answer = () => {
    const navigate = useNavigate()

    return (
        <div className="answer">
            <QuestionTitle question="Планшет" />
            <div className="answer-photo answer-photo-11"></div>
            <button onClick={() => navigate('/question/12')}>
                Идём дальше
            </button>
        </div>
    )
}
