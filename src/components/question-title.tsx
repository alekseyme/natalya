import type { FC } from 'react'

interface Props {
    question: string
}

export const QuestionTitle: FC<Props> = ({ question }) => {
    return <div className="question-title">{question}</div>
}
