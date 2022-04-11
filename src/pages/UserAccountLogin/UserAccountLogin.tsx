import * as React from "react";
import { MayButton } from "../../components/UL/MayButton/MayButton";
import "./UserAccountLogin.css";

export const UserAccountLogin: React.SFC<{}> = () => {
  return (
    <div className="UserAccountLogin">
      <form className="user_form">
        <h1>Вхід</h1>
        <label htmlFor="emeil">Електронна пошта </label>
        <input id="email" className="inputUser" type="text" />
        <label htmlFor="pass">Пароль</label>
        <input id="pass" className="inputUser" type="pass" />
        <div>Запам'ятай мене </div>
        <input id="forgetMe" type="checkbox" />
        <MayButton>Увійти</MayButton>
        <button>Забули пароль?</button>
      </form>
      <div>
        <div>
          Створення облікового запису має багато переваг: оформлюйте швидше,
          зберігайте кілька адрес, відслідковуйте замовлення та багато іншого.
        </div>
        <MayButton>СТВОРИТИ ОБЛІКОВИЙ ЗАПИС</MayButton>
      </div>
    </div>
  );
};
