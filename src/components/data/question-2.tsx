import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'
import { useNavigate } from 'react-router-dom'

const question =
    'В 2022 году около твоей работы была припаркована фура, какого цвета?'
const answer = ['Желтый', 'Желтого', 'Жёлтый', 'Жёлтого', 'желтая', 'жёлтая']

export const Question2 = () => {
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
            <QuestionTitle question="Это была фура желтого цвета" />
            <div className="answer-photo answer-photo-2"></div>
            <button onClick={() => navigate('/question/3')}>Идём дальше</button>
        </div>
    )
}
