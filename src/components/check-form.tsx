import { useState, type FC } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
    answer: string[]
    onSuccess: (value?: string) => void
    anyAnswerIsTrue?: boolean
}

export const CheckForm: FC<Props> = ({
    answer,
    onSuccess,
    anyAnswerIsTrue = false,
}) => {
    const [value, setValue] = useState<string>('')

    const handleCheckAnswer = () => {
        if (value === '') return toast('Лучше что-то написать : )')
        if (anyAnswerIsTrue) return onSuccess(value)
        const finded = answer.find(
            (v) => v.toLocaleLowerCase() === value.toLocaleLowerCase()
        )
        if (finded) {
            return onSuccess()
        }
        return toast('Ошибка. Попробуй ещё раз')
    }

    return (
        <>
            <form
                className="check-form"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleCheckAnswer()
                }}
            >
                <input
                    type="text"
                    value={value}
                    placeholder="Писать здесь"
                    onChange={(e) => setValue(e.target.value)}
                    autoFocus
                />
                <button type="submit">Ответить</button>
            </form>
            <Toaster
                position="bottom-center"
                containerStyle={{
                    fontSize: 20,
                }}
                toastOptions={{
                    icon: '😱',
                }}
            />
        </>
    )
}
