import * as React from "react";
import "./UserAccountLogin.css"

export const UserAccountLogin: React.SFC<{}> = () => {
  return (
    <div className="UserAccountLogin">
      <h1>Вхід</h1>
      <form>
        <div>Електронна пошта</div>
        <input type="text" />
        <div>Пароль</div>
        <input type="pass" />
        <input type="checkbox" />
        <div>Запам'ятай мене Що це?</div>
        <button>Увійти</button>
        <button>Забули пароль?</button>
      </form>
      <div>
        <div>
          Створення облікового запису має багато переваг: оформлюйте швидше,
          зберігайте кілька адрес, відслідковуйте замовлення та багато іншого.
        </div>
        <button>СТВОРИТИ ОБЛІКОВИЙ ЗАПИС</button>
      </div>
    </div>
  );
};
