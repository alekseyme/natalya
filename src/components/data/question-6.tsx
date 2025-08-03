import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question = 'Какая книга изменила твою жизнь?'
const answer = ['Аллен Карр', 'легкий способ бросить курить']

export const Question6 = () => {
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
            <QuestionTitle question="Аллен Карр. Легкий способ бросить курить" />
            <div className="answer-photo answer-photo-6"></div>
            <button onClick={() => navigate('/question/7')}>Идём дальше</button>
        </div>
    )
}
