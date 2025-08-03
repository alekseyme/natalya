import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question =
    'Кого у тебя только не было: коты, собаки, черепаха, рыбки, хомяки... Как называют человека, который разводит дома муравьев?'
const answer = ['Мирмикипер']

export const Question9 = () => {
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
            <QuestionTitle question="Мирмикипер" />
            <div className="answer-photo answer-photo-9"></div>
            <button onClick={() => navigate('/question/10')}>
                Идём дальше
            </button>
        </div>
    )
}
