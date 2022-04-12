import * as React from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { MayButton } from "../../components/UL/MayButton/MayButton";
import { LoginContext } from "../../context/index";

interface FormValues {
  email: string;
  pass: string;
}
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
    loginIn();
  });

  const { isAuth, setIsAuth } = React.useContext(LoginContext);

  const loginIn = () => {
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

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
        <label htmlFor="password">Пароль</label>
        <input
          {...register("pass", {
            required: "Ведіть пароль",
          })}
          id="password"
          className="inputUser"
          type="password"
        />
        {errors?.pass && <div>{errors.pass.message}</div>}
        <div>Запам'ятай мене</div>
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
