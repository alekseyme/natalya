import { useNavigate } from 'react-router-dom'

export const Welcome = () => {
    const navigate = useNavigate()

    const handleStartGame = () => {
        navigate('/instruction')
    }

    return (
        <>
            <div className="welcome first-screen">
                <div className="hb-text">
                    <h3 style={{ marginTop: 0 }}>Личная карточка</h3>
                    <div className="info-box">
                        <div className="info">
                            <div className="info-title">ФИО:</div>
                            <div>Меркулова Наталья Алексеевна</div>
                        </div>
                        <div className="info">
                            <div className="info-title">Дата рождения:</div>
                            <div>4 августа 1975 г.</div>
                        </div>
                        <div className="info">
                            <div className="info-title">Возраст:</div>
                            <div>
                                Ровесница Анджелины Джоли, Деми Мур, Миллы
                                Йовович
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-title">
                                Семейное положение:
                            </div>
                            <div>Замужем</div>
                        </div>
                        <div className="info">
                            <div className="info-title">Знак зодиака:</div>
                            <div>Лев 🦁</div>
                        </div>
                        <div className="info">
                            <div className="info-title">Хобби:</div>
                            <div>
                                Талантливый человек, мастерица, золотые ручки
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-title">Информация:</div>
                            <div>
                                Два сына, два дома, два пруда, две тату.
                                Изобретает неизобретаемое. Любит рыбалку с
                                ночевкой и баньку зимой.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-photo"></div>
            </div>
            <div className="welcome second-screen">
                <div className="text">
                    Твои взрослые дети и сладкий пирожочек поздравляют тебя с
                    днём рождения!
                    <br />
                    Не стесняйся своих лет, не зря есть выражение "Мои года -
                    моё богатство". Ты молодая, красивая и опытная. Любим тебя.
                </div>
            </div>
            <div className="welcome third-screen">
                <div className="text">
                    Мы подготовили тебе сюрприз. Открывай скорее!
                </div>
                <button onClick={handleStartGame}>Открыть</button>
            </div>
        </>
    )
}
