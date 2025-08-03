import { type ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { Question1 } from './data/question-1'
import { Question2 } from './data/question-2'
import { Question3 } from './data/question-3'
import { Question4 } from './data/question-4'
import { Question5 } from './data/question-5'
import { Question6 } from './data/question-6'
import { Question7 } from './data/question-7'
import { Question8 } from './data/question-8'
import { Question9 } from './data/question-9'
import { Question10 } from './data/question-10'
import { Question11 } from './data/question-11'
import { Question12 } from './data/question-12'
import { Question13 } from './data/question-13'

const data: Record<string, ReactNode> = {
    '1': <Question1 />,
    '2': <Question2 />,
    '3': <Question3 />,
    '4': <Question4 />,
    '5': <Question5 />,
    '6': <Question6 />,
    '7': <Question7 />,
    '8': <Question8 />,
    '9': <Question9 />,
    '10': <Question10 />,
    '11': <Question11 />,
    '12': <Question12 />,
    '13': <Question13 />,
}

export const Questions = () => {
    const { id } = useParams()

    return <div className="questions">{id && data[id]}</div>
}
