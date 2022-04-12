import * as React from "react";
import PhoneInput from "react-phone-input-2";
import { MayModalTwo } from "../../UL/MayModalTwo/MayModalTwo";
import "./RequestСall.css";

interface Bla {
  setModalOpen: any;
}

export const RequestСall: React.FC<Bla> = ({ setModalOpen }) => {
  const [contactSent, setContactSent] = React.useState(false);
  const [inputValue, serInputValue] = React.useState({
    name: "",
    phone: "",
  });
 

  const setnContact = () => {
    serInputValue({
      name: "",
      phone: "",
    });
    setContactSent(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 1000);
  };

  const hendelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("fsfdfd");
    // нажатія на єнтер
  };

  return (
    <form className="RequestСallContainer" onSubmit={hendelSubmit}>
      <h2>Замовити дзвінок</h2>
      <div className="RCName">Ф.И.О</div>
      <input
        type="text"
        placeholder="Ф.И.О"
        value={inputValue.name}
        autoComplete="on"
        onChange={(e) => serInputValue({ ...inputValue, name: e.target.value })}
      />
      <div className="RCName">Телефон</div>
      <PhoneInput
        country={"ua"}
        value={inputValue.phone}
        onChange={(e) => serInputValue({ ...inputValue, phone: e })}
      />
      <br />
      <input
        className="RCButton"
        type="submit"
        value="Зроботи замовлення"
        onClick={setnContact}
      />
      {contactSent === true ? (
        <MayModalTwo visible={contactSent} setVisible={setContactSent}>
          Дзвінок оформлений
        </MayModalTwo>
      ) : null}
    </form>
  );
};
