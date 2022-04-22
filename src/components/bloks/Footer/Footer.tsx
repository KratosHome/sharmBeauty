import "./footer.css"
import give_money from "../../../img/icons/give_money.png"
import guarantee_certificate from "../../../img/icons/guarantee_certificate.png"
import support from "../../../img/icons/support.png"
import delivery from "../../../img/icons/delivery.png"
import logo from "../../../img/icons/logo.png"
import facebook_icon from "../../../img/icons/facebook_icon.png"
import instagram_icon from "../../../img/icons/instagram_icon.png"
import visa_icon from "../../../img/icons/visa_icon.png"
import maestro from "../../../img/icons/maestro.png"
import privat24 from "../../../img/icons/privat24.png"

export const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <div className="footerIcons">
                <div>
                    <img src={delivery}/>
                    <span>Доставка
                        по всій Україні
                    </span>
                </div>
                <div>
                    <img src={guarantee_certificate}/>
                    <span>
                        Гарантія
                    </span>
                </div>
                <div>
                    <img src={give_money}/>
                    <span> Готівковий та безготівковий розрахунок</span>
                </div>
                <div>
                    <img src={support}/>
                    <span>Безкоштовний дзвінок 0 (800) 50 51 13</span>
                </div>
            </div>
            <div className="footerContent">
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    <div>БРЕНДИ</div>
                    <div>ПРО НАС</div>
                    <div>АКЦІЇ</div>
                    <div>ДИСКОНТНА ПРОГРАМА</div>
                    <div>КОНТАКТИ</div>
                </div>
                <div>
                    <div>Жіночі Парфуми</div>
                    <div>Нішеві Парфуми</div>
                    <div>Туалетна вода</div>
                    <div>Чоловічі Парфуми</div>
                    <div>Нішеві Парфуми</div>
                    <div>Парфумована вод</div>
                    <div>Туалетна вода</div>
                </div>
                <div>
                    <div>КРАСА ТА ДОГЛЯД</div>
                    <div>Жіночі Парфуми</div>
                    <div>Нішеві Парфуми</div>
                    <div>Туалетна вода</div>
                    <div>Чоловічі Парфуми</div>
                    <div>Нішеві Парфуми</div>
                    <div>Парфумована вод</div>
                    <div>Туалетна вода</div>
                </div>
                <div>
                    <div>МИ ЗАВЖДИ НА ЗВ'ЯЗКУ!</div>
                    <div>Ви можете написати нам лист або зателефонувати нам за телефонами</div>
                    <div>info@sharmbeauty.ua</div>
                    <div>0 (800) 50 51 13</div>
                    <div> (044) 299 35 55</div>
                    <div>Політика конфіденційності</div>
                    <div>Угода користувача</div>
                    <div>Обмін і повернення</div>
                </div>

            </div>
            <div className="footerIcons2">
                <div>
                    <img src={facebook_icon}/>
                    <img src={instagram_icon}/>
                </div>
                <div>2019-2020. Інтернет-магазин парфумерії ШАРМ Beauty ©</div>
            </div>
        </footer>
    )
};