import "./Subscribe.css"
export default function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container">
                <h2>Как быть в курсе всех последних трендов питания и нутрициологии?</h2>
                <p>Подписаться на мой телеграм канал</p>
                <form>
                    <input placeholder="Почта"></input>
                    <button>Подписаться</button>
                </form>
            </div>
        </section>
    )
}