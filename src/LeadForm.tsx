import "./LeadForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import pic from "./assets/process-pic.png"

interface LeadForm {
    setFormOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function LeadForm({setFormOpened}: LeadForm) {
    return (
        <section className="leadform">
            <div className="container">
                <button onClick={
                    () => {
                        setFormOpened(false);
                    }
                } className="leadform-close">
                    <FontAwesomeIcon icon={faX} />
                </button>
                <div>
                    <h2>Записаться на консультацию</h2>
                    <img src={pic} />
                    <p>Скорее пройдите консультацию и получите персональный план, как получить свое тело мечты</p>
                </div>
                <form>
                    <input placeholder="Имя"></input>
                    <input placeholder="Телефон"></input>
                    <input placeholder="Почта"></input>
                    <button type="submit">Записаться</button>
                </form>
            </div>

        </section>
    )
}