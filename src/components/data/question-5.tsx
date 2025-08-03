import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question =
    'Ты всегда любила играть в компьютерные игры. Одна из них называется как чертежный инструмент, какой?'
const answer = ['Линейка', 'lineage']

export const Question5 = () => {
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
            <QuestionTitle question="Линейка" />
            <div className="answer-photo answer-photo-5"></div>
            <button onClick={() => navigate('/question/6')}>Идём дальше</button>
        </div>
    )
}
