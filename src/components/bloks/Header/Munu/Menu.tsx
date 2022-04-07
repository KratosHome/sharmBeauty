import * as React from "react";
import "./Menu.css";
import logo from "../../../../img/icons/logo.png";
import close from "../../../../img/icons/slose.png"
import { useState } from "react";


export const Menu: React.SFC<{}> = () => {
  const [menuActive, setMenuActiv] = useState(false);
  return (
    <div className="background_menu">
      <div
        className="menu_mob_open_label"
        onClick={() => setMenuActiv(!menuActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav
        className={
          menuActive ? "menu_mob_open animation_menu_open " : "manu_close menu"
        }
      >
        <img onClick={() => setMenuActiv(!menuActive)} className="close_menu" src={close} alt="зикрити меню" />
        <ul>
          <div
            className="menu_mob_openMenu_label"
            onClick={() => setMenuActiv(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
            <div>
              <img className="logoMenuOpne" src={logo} alt="Logo" />
            </div>
          </div>
          <li>
            <a>Парфумерія</a>
            <ul className="sub_menu">
              <div>
                <li>
                  <a>Новинки</a>
                </li>
                <li>
                  <a>Набори</a>
                </li>
                <li>
                  <a>Мініатюри</a>
                </li>
                <li>
                  <a>Парфумована вода</a>
                </li>
                <li>
                  <a>Туалетна вода</a>
                </li>
                <li>
                  <a>Одеколон</a>
                </li>
              </div>
              <div>
                <li>
                  <a>Нішева парфумерія</a>
                </li>
                <li>
                  <a>Елітна парфумерія</a>
                </li>
                <li>
                  <a>Арабська парфумерія</a>
                </li>
                <li>
                  <a>Атомайзери</a>
                </li>
              </div>
              <div>
                <li>
                  <a>Масляні парфуми</a>
                </li>
                <li>
                  <a>Жіноча парфумерія</a>
                </li>
                <li>
                  <a>Чоловіча парфумерія</a>
                </li>
                <li>
                  <a>Парфумерія унісекс</a>
                </li>
                <li>
                  <a>Дитяча парфумерія</a>
                </li>
              </div>
              <div>
                <li>
                  <a>Аромати для дому</a>
                </li>
                <li>
                  <a>Аромалампи</a>
                </li>
                <li>
                  <a>Ароматизатори</a>
                </li>
                <li>
                  <a>Ароматичні палички</a>
                </li>
                <li>
                  <a>Ароматичні свічки</a>
                </li>
                <li>
                  <a>Парфумовані свічки</a>
                </li>
                <li>
                  <a>Аромадіфузори</a>
                </li>
              </div>
              <div>
                <li>
                  <a>РОЗПРОДАЖ!</a>
                </li>
              </div>
            </ul>
          </li>
          <li>
            {" "}
            <a>Макіяж</a>
          </li>
          <li>
            <a>Волосся</a>
          </li>
          <li>
            <a>Обличчя</a>
          </li>
          <li>
            <a>Тіло і ванна</a>
          </li>
          <li>
            <a>Чоловікам</a>
          </li>
          <li>
            <a>Подарунки</a>
          </li>
          <li>
            <a>Бренди</a>
          </li>
          <li>
            <a>Акції</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
