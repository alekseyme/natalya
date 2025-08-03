import { useState } from 'react'
import { CheckForm } from '../check-form'
import { QuestionTitle } from '../question-title'

const question = 'Твоя мечта, которая обязательно сбудется?'
const answer = ['']

export const Question13 = () => {
    const [success, setSuccess] = useState<boolean>(false)
    const [ans, setAns] = useState<string>('')

    if (success) return <Answer answer={ans} />

    return (
        <div>
            <QuestionTitle question={question} />
            <CheckForm
                anyAnswerIsTrue
                answer={answer}
                onSuccess={(value) => {
                    setAns(value ?? '')
                    setSuccess(true)
                }}
            />
        </div>
    )
}

const Answer = ({ answer }: { answer: string }) => {
    const checkAnswer = (value: string): string => {
        let result = 'answer-photo'

        if (value.toLowerCase().includes('домбай'))
            result += ' answer-photo-dombai'

        return result
    }

    const checkTextAnswer = (value: string): string => {
        let result = 'Пусть все мечты обязательно сбудутся! '

        if (value.toLowerCase().includes('домбай'))
            result += 'И поездка на Домбай в том числе'

        return result
    }

    return (
        <div className="answer">
            <QuestionTitle question={checkTextAnswer(answer)} />
            <div className={checkAnswer(answer)}></div>
        </div>
    )
}
