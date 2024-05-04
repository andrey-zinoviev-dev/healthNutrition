import React from "react"
import "./LeadForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faX } from "@fortawesome/free-solid-svg-icons"
import pic from "./assets/process-pic.png"
// import { LeadModel } from "./models/LeadModel"
import { faVk } from "@fortawesome/free-brands-svg-icons"

interface LeadForm {
    setFormOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function LeadForm({setFormOpened}: LeadForm) {
    //state
    const [successInquery, setSuccessfuleInquery] = React.useState(false);


    const nameRef = React.useRef<HTMLInputElement>(null);
    const phoneRef = React.useRef<HTMLInputElement>(null);
    return (
        <section className="leadform">
            <div className="container">
                <button onClick={
                    () => {
                        setFormOpened(false);
                        setSuccessfuleInquery(false);
                    }
                } className="leadform-close">
                    <FontAwesomeIcon icon={faX} />
                </button>
                {!successInquery ? 
                <>
                    <div>
                        <h2>Записаться на консультацию</h2>
                        <img src={pic} />
                        <p>Скорее пройдите консультацию и получите персональный план, как получить свое тело мечты</p>
                    </div>
                 
                    <form onSubmit={(evt) => {
                        evt.preventDefault();
                        setSuccessfuleInquery(true);
                        // console.log();
                        fetch(`https://api.telegram.org/bot${import.meta.env.VITE_bot_token}/sendMessage`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                chat_id: 143811972,
                                text: `Новая заявка: ${nameRef.current && nameRef.current.value}, ${phoneRef.current && phoneRef.current.value}`
                            }),
                        })
                    }}
                    >
                        <input ref={nameRef} name="name" placeholder="Имя"></input>
                        <input ref={phoneRef}  name="phone" placeholder="Телефон"></input>
                        <button type="submit">Записаться</button>
                    </form>
                </>
                :
                <div className="leadform__success-wrapper">
                    <h3>Ваша заявка отправлена, спасибо!</h3>
                    <p>Мы очень скоро свяжемся, а пока, чтобы быть в курсе всех новостей, подпишитесь на мои соцсети:</p>
                    <ul>
                        <li key={"vk"}>
                            <a href="">
                                <FontAwesomeIcon icon={faVk} />
                            </a>
                        </li>
                        <li key={"tg"}>
                            <a href="https://t.me/healtheate">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </a>
                        </li>
                    </ul>
                </div>}

            </div>

        </section>
    )
}