import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question =
    'Талантливый человек талантлив во всём. Посадить "это" может любой, но вот сплести...'
const answer = ['дерево', 'дерево из бисера']

export const Question10 = () => {
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
            <QuestionTitle question="Дерево из бисера" />
            <div className="answer-photo answer-photo-10"></div>
            <button onClick={() => navigate('/question/11')}>
                Идём дальше
            </button>
        </div>
    )
}
