import * as React from "react";
import "./thema.css";
import sun from "../../../img/icons/sun.png";
import moon from "../../../img/icons/moon.png";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import { animeteOpen } from "../../../redux/actions/animateActions";
import { useDispatch } from "react-redux";
import "animate.css";
import { CSSTransition } from "react-transition-group";
import { useTheme } from "../../../hooks/useTheme";

export const Thema: React.FC<{}> = () => {
  const handalClick = () => {
    setTheme("light");
  };
  const handalClickLight = () => {
    setTheme("dark");
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="thema ">
        <CSSTransition timeout={200} classNames="my-node">
          {theme === "dark" ? (
            <img onClick={() => handalClick()} src={sun} alt="thema sun" />
          ) : (
            <img
              onClick={() => handalClickLight()}
              src={moon}
              alt="thema sun"
            />
          )}
        </CSSTransition>
      </div>
    </>
  );
};
