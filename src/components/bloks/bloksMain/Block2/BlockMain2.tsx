import "./BlockMain2.css";
import img1 from "../../../../img/baner/block-2/block3.jpg";
import img2 from "../../../../img/baner/block-2/block5.jpg";
import { MayButton } from "../../../UL/MayButton/MayButton";

export const BlockMain2: React.SFC<{}> = () => {
  return (
    <div className="BlockMain2">
      <div className="BlockMainImg BlockMain2Img1">
        <img src={img1} />
      </div>
      <div className="BlockMainButton BlockMain2Btn">
        <h4 className="BlockMainName">Найди свій аромат</h4>
        <MayButton>Перейти</MayButton>
      </div>
      <div className="BlockMainImg BlockMain2Img2">
        <img src={img2} />
      </div>


    </div>
  );
};
