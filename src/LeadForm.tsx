import "./LeadForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"

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
                <h2>Записаться на консультацию</h2>
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