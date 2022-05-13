import "./footer.css"
import give_money from "../../../img/icons/give_money.png"
import guarantee_certificate from "../../../img/icons/guarantee_certificate.png"
import support from "../../../img/icons/support.png"
import delivery from "../../../img/icons/delivery.png"
import logo from "../../../img/icons/logo.png"
import facebook_icon from "../../../img/icons/facebook_icon.png"
import instagram_icon from "../../../img/icons/instagram_icon.png"

export const Footer = () => {
    return (
        <footer>
            <div className="footerIcons">
                <div>
                    <img alt="delivery" src={delivery}/>
                    <span>Доставка
                        по всій Україні
                    </span>
                </div>
                <div>
                    <img alt="guarantee_certificate"  src={guarantee_certificate}/>
                    <span>
                        Гарантія
                    </span>
                </div>
                <div>
                    <img alt="give_money"  src={give_money}/>
                    <span> Готівковий та безготівковий розрахунок</span>
                </div>
                <div>
                    <img alt="support" src={support}/>
                    <span>Безкоштовний дзвінок 0 (800) 50 51 13</span>
                </div>
            </div>
            <div className="footerContent">
                <div>
                    <img alt="logo" src={logo}/>
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
                    <img alt="facebook_icon" src={facebook_icon}/>
                    <img alt="instagram_icon" src={instagram_icon}/>
                </div>
                <div>2019-2020. Інтернет-магазин парфумерії ШАРМ Beauty ©</div>
            </div>
        </footer>
    )
};