import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question =
    'Говорят, что у людей, которые любят животных, особенно доброе сердце. Кто твой самый любимый боксёр?'
const answer = ['тайсон', 'майк тайсон']

export const Question8 = () => {
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
            <QuestionTitle question="Тайсон, Кот тайсон, Майк тайсон" />
            <div className="answer-photo answer-photo-8"></div>
            <button onClick={() => navigate('/question/9')}>Идём дальше</button>
        </div>
    )
}
