import "./TabsCharacteristic.css"
import {CSSTransition} from "react-transition-group";

interface TabsCharacteristicType {
    tab: number
}

export const TabsCharacteristic: React.FC<TabsCharacteristicType> = ({tab}) => {
    return (
        <CSSTransition in={tab === 1} classNames="alert" timeout={300} unmountOnExit>
            <div>
                TabsCharacteristic
            </div>
        </CSSTransition>
    )
};

