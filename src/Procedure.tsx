import { steps } from "./utils"
export default function Procedure() {
    return (
        <section>
            <h2>Как происходит создание тела мечты</h2>
            <h3>Процесс</h3>
            <ul>
                {steps.map((step, index) => {
                    return <li key={step.name}>
                        <h3>{step.name}</h3>
                        <p>{step.text}</p>
                        <span>{index + 1}</span>
                    </li>
                })}
            </ul>
            <div>
                <h4>Индивидуальный подход</h4>
                <p>Мы подбираем специальные исследования для достижения ваших потребностей</p>
            </div>
        </section>
    )
}