import * as React from "react";
import "./Header.css";
import logo from "../../../img/icons/logo.png";
import { MayModal } from "../../UL/MayModal/MayModal";
import { RequestСall } from "../RequestСall/RequestСall";
import "animate.css";

export const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);



  return (
    <header className="header">
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
          <div className="shedule">ГРАФІК РОБОТИ</div>
          <div>з 8:00 до 20:00</div>
          <div>БЕЗ ВИХІДНИХ</div>
        </div>
        <div className="row">
          <div className="navTopList">
            <a href="/about-ass">О нас</a>
            <a href="/delivery-and-payment">Оплата та доставка</a>
            <a href="/blog">Статті</a>
            <a href="/discount-program">Дисконтна програма</a>
            <a href="/faq">FfAQ</a>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <div className="navTopList">
            <div>Менюс</div>
            <div>Менюс</div>
            <div>Менюс</div>
            <div>Менюс</div>
            <div>Менюс</div>
            <div>Менюс</div>
            <div>Менюс</div>
          </div>
        </div>
        <div className="rigt-block">
          <div className="lang-list">thema</div>
          <div className="lang-list">Lenguage</div>
          <div>office</div>
          <div>search</div>
          <div>likes</div>
          <div>product comparison</div>
          <div>basket</div>
        </div>
      </div>
    </header>
  );
};
