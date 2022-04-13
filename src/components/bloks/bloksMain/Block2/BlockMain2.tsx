import * as React from "react";
import "./BlockMain2.css";
import img1 from "../../../../img/baner/block-2/block3.jpg";
import { MayButton } from "../../../UL/MayButton/MayButton";

export const BlockMain2: React.SFC<{}> = () => {
  return (
    <div className="BlockMain2">
      <div className="BlockMain2Img1">
        <img src={img1} />
      </div>
      <div className="BlockMain2Btn">
        <MayButton>Перейти</MayButton>
      </div>
      <div className="BlockMain2Img2">
        <img src={img1} />
      </div>
    </div>
  );
};
