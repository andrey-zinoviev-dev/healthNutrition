import { services } from "./utils"
export default function Services() {
    return (
        <section>
            <h2>Как будет оказана помощь</h2>
            <ul>
                {services.map((service) => {
                    return <li key={service}>
                        <p>{service}</p>
                    </li>
                })}
            </ul>
        </section>
    )
}