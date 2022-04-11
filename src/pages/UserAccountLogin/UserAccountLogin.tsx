import * as React from "react";
import { useForm, Resolver } from "react-hook-form";
import { MayButton } from "../../components/UL/MayButton/MayButton";
import "./UserAccountLogin.css";

type FormValues = {
  email: string;
  pass: string;
};

export const UserAccountLogin: React.SFC<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="UserAccountLogin">
      <form onSubmit={onSubmit} className="user_form">
        <h1>Вхід</h1>
        <label htmlFor="emeil">Електронна пошта</label>
        <input
          {...register("email", {
            required: "Ведіть email",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Введіть правельний email",
            },
          })}
          id="email"
          className="inputUser"
          type="text"
        />
        {errors?.email && <div>{errors.email.message}</div>}
        <label htmlFor="pass">Пароль</label>
        <input
          {...register("pass", {
            required: "Ведіть пароль",
          })}
          id="pass"
          className="inputUser"
          type="pass"
        />
        {errors?.pass && <div>{errors.pass.message}</div>}
        <div>Запам'ятай мене</div>
        <input id="forgetMe" type="checkbox" />
        <MayButton>Увійти</MayButton>
        <a>Забули пароль?</a>
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
