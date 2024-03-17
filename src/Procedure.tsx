import { steps } from "./utils"
import "./Procedure.css";
import picture from "./assets/process-pic.png"

export default function Procedure() {
    return (
        <section className="procedure">
            <div className="procedure__headline-wrapper">
                <h2>Как происходит создание тела мечты</h2>
                <img src={picture} alt="процесс" />
            </div>
            <h3>Процесс</h3>
            <ul className="procedure__ul">
                {steps.map((step, index) => {
                    return <li className="procedure__ul-li" key={step.name}>
                        <div className="procedure__ul-li-warpper">
                            <h3 className="procedure__ul-li-headline">{step.name}</h3>
                            <span>{index + 1}</span>
                        </div>
                        <p>{step.text}</p>
                    </li>
                })}
            </ul>
            {/* <div>
                <h4>Индивидуальный подход</h4>
                <p>Мы подбираем специальные исследования для достижения ваших потребностей</p>
            </div> */}
        </section>
    )
}