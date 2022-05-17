import "../../components/bloks/bloksMain/bloks.css";
import {BlockMain1} from "../../components/bloks/bloksMain/Bllock1/BlockMain1";
import {BlockMain2} from "../../components/bloks/bloksMain/Block2/BlockMain2";
import {MayBanner} from "../../components/UL/MayBanner/MayBanner";
import {Slider} from "../../components/bloks/Slider/Slider";
import Block3 from "../../components/bloks/bloksMain/Block3/Block3";

export const Main: React.SFC<{}> = () => {
    return (
        <div>
            <MayBanner/>
            <BlockMain1/>
            <BlockMain2/>
            <Slider/>
            <Block3/>
        </div>
    );
};
