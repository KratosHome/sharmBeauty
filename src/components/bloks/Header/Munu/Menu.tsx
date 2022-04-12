import * as React from "react";
import "./Menu.css";
import logo from "../../../../img/icons/logo.png";
import close from "../../../../img/icons/slose.png";
import sub_menu from "../../../../img/icons/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuServer from "../../../../API/MenuServer";

interface Menu {
  id: number;
  name: string;
  CubMenu: any[];
  path: string;
  block: number;
}
export const Menu: React.SFC<{}> = () => {
  const [menuActive, setMenuActiv] = useState(false);
  const [getMenu, setGetMenu] = useState<Menu[]>([]);

  async function fetchMenu() {
    const getMenu = await MenuServer.MenPage();
    setGetMenu(getMenu);
  }
  React.useEffect(() => {
    fetchMenu();
  }, []);

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
        <img
          onClick={() => setMenuActiv(!menuActive)}
          className="close_menu"
          src={close}
          alt="зикрити меню"
        />
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
          {getMenu.map((menu) => (
            <ul key={menu.id}>
              <li>
                <a href={menu.path}>{menu.name}</a>
                {menu.CubMenu.length > 1 ? (
                  <ul className="sub_menu">
                    {menu.CubMenu.map((cub) => (
                      <li key={cub.id}> 
                        <a href={cub.path}>{cub.name}</a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  false
                )}
              </li>
            </ul>
          ))}
        </ul>
      </nav>
    </div>
  );
};
