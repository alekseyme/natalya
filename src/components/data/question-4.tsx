import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question = 'Как расшифровывается слова бухгалтер?'
const answer = [
    'книгодержатель',
    'книгадержатель',
    'книга держатель',
    'книго держатель',
    'держатель книги',
]

export const Question4 = () => {
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
            <QuestionTitle question="Книгодержатель" />
            <div className="answer-photo answer-photo-4"></div>
            <button onClick={() => navigate('/question/5')}>Идём дальше</button>
        </div>
    )
}
