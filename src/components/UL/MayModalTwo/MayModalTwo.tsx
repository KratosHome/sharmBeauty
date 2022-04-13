import "./MayModalTwo.css";
import "animate.css";
import { useEffect } from "react";

interface modal {
  visible: boolean;
  setVisible: any;
}

export const MayModalTwo: React.FC<modal> = ({
  children,
  visible,
  setVisible,
}) => {
  useEffect(() => {
    const timeId = setTimeout(() => {
      setVisible(false);
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  });

  return (
    <>
      {" "}
      <div
        className={
          visible
            ? "MayModalTwoContent animate__animated animate__wobble"
            : "MayModalTwoContent  animate__animated animate__backOutUp"
        }
      >
        {children}
      </div>
    </>
  );
};
