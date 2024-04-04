import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import photo from "./assets/photo_2024-03-22_03-03-11 1.png"
import "./About.css";

interface ActionPorps {
    setFormOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function About({setFormOpened}: ActionPorps) {
    
    return (
        <section className="about">
            <div className="about__wrapper">
                <div>
                    <h2 className="about__headline">Обо мне</h2>
                    <p>Я помогаю  людям получить  устойчивые измения с помощью научных знаний в области нутрициологии  и доказательного подхода. Получите уйстойчивый результат и Вы</p>
                    <button onClick={() => {
                        setFormOpened(true);
                    }} className="about__btn">Консультация <FontAwesomeIcon className="about__btn-svg" icon={faArrowRight} /></button>
                </div>
                <div>
                    <img src={photo} />
                    <p>дизайнер привычек // health coach // нутрициолог</p>
                </div>
            </div>
        </section>
    )
}