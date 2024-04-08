import React from "react"
import "./LeadForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import pic from "./assets/process-pic.png"

interface LeadForm {
    setFormOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function LeadForm({setFormOpened}: LeadForm) {
    //refs
    const nameRef = React.useRef<HTMLInputElement>(null);
    const phoneRef = React.useRef<HTMLInputElement>(null);

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
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    console.log();
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
                }}>
                    <input ref={nameRef} name="name" placeholder="Имя"></input>
                    <input ref={phoneRef} name="phone" placeholder="Телефон"></input>
                    <button type="submit">Записаться</button>
                </form>
            </div>

        </section>
    )
}