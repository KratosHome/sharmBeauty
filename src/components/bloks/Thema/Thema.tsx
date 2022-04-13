import "./thema.css";
import sun from "../../../img/icons/sun.png";
import moon from "../../../img/icons/moon.png";
import "animate.css";
import { CSSTransition } from "react-transition-group";
import { useTheme } from "../../../hooks/useTheme";
import { useEffect, useState } from 'react';

export const Thema: React.FC<{}> = () => {
  const { theme, setTheme } = useTheme();
  const [bulem, setBulem] = useState(false);

  const handalClick = () => {
    setTheme("light");
  };
  const handalClickLight = () => {
    setTheme("dark");
  };

  useEffect(() => {
    if (theme === "light") {
      setBulem(true);
    } else {
      setBulem(false);
    }
  }, [theme]);

  return (
    <>
      <div className="thema">
        <CSSTransition
          in={bulem}
          timeout={200}
          classNames="my-node"   
          appear  
        >
          {theme === "dark" ? (
            <img onClick={() => handalClick()} src={sun} alt="thema light" />
          ) : (
            <img
              onClick={() => handalClickLight()}
              src={moon}
              alt="thema dark"
            />
          )}
        </CSSTransition>
      </div>
    </>
  );
};
