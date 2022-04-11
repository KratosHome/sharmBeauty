import * as React from "react";
import "./MayButton.css";

export const MayButton: React.SFC<{}> = ({ children }) => {
  return (
    <button className="may_btn">
      <span> {children}</span>
    </button>
  );
};
