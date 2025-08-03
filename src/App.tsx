import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'

export const App = () => {
    return <RouterProvider router={routes} />
}
