import "./Action.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import picture from "./assets/bigstock-Health-food-selection-super-foods-fruits-veggies-thumb 1.png"
export default function Action() {
    return (
        <section className="action">
            <div className="action__text">
                <h1>Создадим с вами тело мечты без запретов и диет</h1>
                <p className="action__text-p">Я- специалист по нутрициологии, немедикаментозному восстановлению здоровья и коррекции образа жизни</p>
                <button>Записаться на бесплатную консультацию</button>
                <div className="action__text-social">
                    <div className="action__text-social-info">
                        <h4>Индивидуальный подход</h4>
                        <p>Мы подбираем специальные исследования для реализации ваших потребностей</p>
                    </div>
                    <ul className="action__text-social-ul">
                        <li>
                            <FontAwesomeIcon className="action__text-social-ul-svg" icon={faVk} />
                        </li>
                        <li>
                            <FontAwesomeIcon className="action__text-social-ul-svg" icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon className="action__text-social-ul-svg" icon={faTelegram} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="action__links">
                <div className="action__links-content">
                    <div className="action__links-content-div">
                        <img src={picture}></img>
                        <p className="action__links-content-div-p">Диагностика организма</p>
                        <span>60 минут</span>
                    </div>
                    <div className="action__links-content-div">
                        <p className="action__links-content-div-p">Ознакомьтесь с моими сертификатами и дипломами специалиста по нутрициологии</p>
                        <span>+4 сертификата</span>
                        {/* <div></div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}