import * as React from "react";
import { MayButton } from "../../../UL/MayButton/MayButton";
import "./BlockMain1.css";
import img1 from "../../../../img/baner/block-1/block1.jpg";
import img2 from "../../../../img/baner/block-1/block2.jpg";
import img3 from "../../../../img/baner/block-1/block3.jpg";
import img4 from "../../../../img/baner/block-1/block4.jpg";
import img5 from "../../../../img/baner/block-1/block5.jpg";

const image = [
    { url: img1, path: "/product" },
    { url: img2, path: "" },
    { url: img3, path: "/product" },
    { url: img4, path: "/product" },
    { url: img5, path: "/product" },
  ];

export const BlockMain1: React.FC<{}> = () => {
  return (
    <div className="block_main_one">
      <div className="BlockMain1Img1 BlockMainImg">
        <img src={img1} />
      </div>
      <div className="BlockMain1Img2 BlockMainImg">
        <img src={img2} />
      </div>
      <div className="BlockMain1Img3 BlockMainImg">
        <img src={img3} />
      </div>
      <div className="BlockMain1Img4 BlockMainImg">
        <img src={img4} />
      </div>
      <div className="BlockMain1Img5 BlockMainImg">
        <img src={img5} />
      </div>
      <div className="BlockMainButton BlockMain1Button">
        <h4 className="BlockMainName">Найди свій аромат</h4>
        <MayButton>Найти</MayButton>
      </div>
    </div>
  );
};
