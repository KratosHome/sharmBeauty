import "./BlockMain2.css";
import img1 from "../../../../img/baner/block-2/block3.jpg";
import img2 from "../../../../img/baner/block-2/block5.jpg";
import {BlockContent} from "../BlockContent/BlockContent";

export const BlockMain2 = () => {
    return (
        <div className="BlockMain2">
            <div className="BlockMainImg BlockMain2Img1">
                <img alt="imgblock" src={img1}/>
            </div>
            <BlockContent buttonName={"купити"} title={"-40%"}/>
            <div className="BlockMainImg BlockMain2Img2">
                <img alt="imgblock" src={img2}/>
            </div>
        </div>
    );
};
