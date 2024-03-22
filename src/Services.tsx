import { services } from "./utils"
import pic from "./assets/services-sign.png"
import "./Services.css"

export default function Services() {
    return (
        <section className="services">
            <img className="services__img" src={pic} alt="услуги" />
            <h2>Как будет оказана помощь</h2>
            <ul className="services__ul">
                {services.map((service) => {
                    return <li className="services__ul-li" key={service}>
                        <p>{service}</p>
                        <div></div>
                    </li>
                })}
            </ul>
        </section>
    )
}