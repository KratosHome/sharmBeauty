
import {CSSTransition} from "react-transition-group";

interface ProductDeliveryTupe {
    tab: number
}

export const ProductDelivery: React.FC<ProductDeliveryTupe> = ({tab}) => {
    return (
        <CSSTransition in={tab === 4} classNames="alert" timeout={300} unmountOnExit>
            <div>
                ProductDelivery
            </div>
        </CSSTransition>
    )
};

