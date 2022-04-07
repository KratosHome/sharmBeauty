import * as React from "react";
import "./Header.css";
import logo from "../../../img/icons/logo.png";
import { MayModal } from "../../UL/MayModal/MayModal";
import { RequestСall } from "../RequestСall/RequestСall";
import "animate.css";
import { Link } from "react-router-dom";
import { Thema } from "../Thema/Thema";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { useTheme } from "../../../hooks/useTheme";
import { UserAccount } from "../UserAccount/UserAccount";
import { Likes } from "../Likes/Likes";
import { Search } from "../Search/Search";
import { Comparison } from "../Comparison/Comparison";
import { Basket } from "../Basket/Basket";
import { Menu } from "./Munu/Menu";

export const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <header>
      <div className="containderHead">
        <div>
          <a className="phone" title="телефонуй" href="tel:0(800)505113">
            {" "}
            0 (800) 50 51 13
          </a>
          <div onClick={() => setModalOpen(!modalOpen)} className="orderСall">
            Замовити дзвінок
          </div>
          <MayModal visible={modalOpen} setVisible={setModalOpen}>
            <RequestСall setModalOpen={setModalOpen} />
          </MayModal>
          <div className="time_mork">
            <div className="shedule">ГРАФІК РОБОТИ</div>
            <div>з 8:00 до 20:00</div>
            <div>БЕЗ ВИХІДНИХ</div>
          </div>
        </div>
        <div className="row">
          <div className="navTopList">
            <Link to="/about">О нас</Link>
            <a href="/delivery-and-payment">Оплата та доставка</a>
            <a href="/blog">Статті</a>
            <a href="/discount-program">Дисконтна програма</a>
            <a href="/faq">FAQ</a>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <div className="navTopList2">
            <Menu />
          </div>
        </div>
        <div className="rigt-block">
          <Thema />
          <UserAccount />
          <Likes />
          <Search />
          <Comparison />
          <Basket />
          <div>Більше 100 000 товарів</div>
        </div>
      </div>
    </header>
  );
};
