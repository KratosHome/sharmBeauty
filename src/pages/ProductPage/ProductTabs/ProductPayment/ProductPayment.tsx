import {CSSTransition} from "react-transition-group";

interface ProductPaymentTupe {
    tab: number
}

export const ProductPayment: React.FC<ProductPaymentTupe> = ({tab}) => {
    return (
        <CSSTransition in={tab === 5} classNames="alert" timeout={300} unmountOnExit>
            <div>
                ProductPayment
            </div>
        </CSSTransition>
    )
};

