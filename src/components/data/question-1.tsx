import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question = 'Какой был домашний номер телефона на ул. Спутников 15?'
const answer = ['43286', '4-32-86']

export const Question1 = () => {
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
            <QuestionTitle question="Желтый телефон с номером 4-32-86" />
            <div className="answer-photo answer-photo-1"></div>
            <button onClick={() => navigate('/question/2')}>Идём дальше</button>
        </div>
    )
}
