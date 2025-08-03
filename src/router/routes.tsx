import { createBrowserRouter } from 'react-router-dom'
import { QuestionLayout } from '../layouts/question-layout'
import { Questions } from '../components/questions'
import { Welcome } from '../components/welcome'
import { Instruction } from '../components/instruction'

export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Welcome />,
        },
        {
            path: '/instruction',
            element: <Instruction />,
        },
        {
            path: '/question',
            element: <QuestionLayout />,
            errorElement: 'Такой страницы не существует',
            children: [
                {
                    path: ':id',
                    element: <Questions />,
                },
            ],
        },
    ],
    {
        basename: '/natalya',
    }
)
