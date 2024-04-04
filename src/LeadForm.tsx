import React from "react"
import "./LeadForm.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import pic from "./assets/process-pic.png"
import { LeadModel } from "./models/LeadModel"

interface LeadForm {
    setFormOpened: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function LeadForm({setFormOpened}: LeadForm) {
    const [formData, setFormData] = React.useState<LeadModel>({name: "", phone: ""})
    
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
                }}>
                    <input onChange={(evt) => {
                        setFormData((prevValue) => {
                            return {...prevValue, name: evt.target.value};
                        })
                    }} name="name" placeholder="Имя"></input>
                    <input onChange={(evt) => {
                        setFormData((prevValue) => {
                            return {...prevValue, phone: evt.target.value};
                        })
                    }} name="phone" placeholder="Телефон"></input>
                    <button onClick={(evt) => {
                        return fetch(`https://api.telegram.org/bot6974314510:AAFP_-WX6wu1Gd8m0ISNpQLiSc8lSshGtjk/sendMessage`, {
                            method: "POST",
                            headers: {
                                "Content-Type":"application/json"
                            },
                            body: JSON.stringify(formData),
                        })
                        .then((data) => {
                            console.log(data);
                        })
                        
                    }} type="submit">
                        Записатсья
                    </button>
                </form>
            </div>

        </section>
    )
}