import "./Menu.css";
import logo from "../../../../img/icons/logo.png";
import close from "../../../../img/icons/slose.png";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import MenuServer from "../../../../API/MenuServer";

interface MenuType {
    id: number;
    name: string;
    CubMenu: any[];
    path: string;
    block: number;
}

export const Menu = () => {
    const [menuActive, setMenuActiv] = useState(false);
    const [getMenu, setGetMenu] = useState<MenuType[]>([]);

    async function fetchMenu() {
        const getMenu = await MenuServer.MenPage();
        setGetMenu(getMenu);
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <>
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
                            <img className="logoMenuOpne" src={logo} alt="Logo"/>
                        </div>
                    </div>
                    {getMenu.map((menu) => (
                        <ul key={menu.id}>
                            <li>
                                <NavLink
                                    to={menu.path}
                                >
                                    {menu.name}
                                </NavLink>
                                {menu.CubMenu.length > 1 ? (
                                    <ul className="sub_menu">
                                        {menu.CubMenu.map((cub) => (
                                            <li key={cub.id}>
                                                <NavLink to={cub.path}>{cub.name}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    null
                                )}
                            </li>
                        </ul>
                    ))}
                </ul>
            </nav>
        </>
    );
};
