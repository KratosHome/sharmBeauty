import * as React from "react";
import "./MayButton.css";

type Props = {
  onClick?: () => void, 
}

export const MayButton: React.SFC<Props> = ({ children, onClick }) => {
  return (
    <button className="may_btn" onClick={onClick}>
      <span> {children}</span>
    </button>
  );
};
