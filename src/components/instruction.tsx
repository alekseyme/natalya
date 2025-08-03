import { useNavigate } from 'react-router-dom'

export const Instruction = () => {
    const navigate = useNavigate()

    const handleStartGame = () => {
        navigate('/question/1')
    }

    return (
        <div className="instruction layout">
            <div className="text">
                Сейчас мы отправимся в маленькое путешествие по твоей жизни.
                <br />
                Тебе нужно будет ответить на вопросы, которые так или иначе
                связаны с тобой.
                <br />
                Приятной игры 🚀
            </div>

            <button onClick={handleStartGame}>Приступим</button>
        </div>
    )
}
