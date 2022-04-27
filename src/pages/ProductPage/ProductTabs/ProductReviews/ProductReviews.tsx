
import {CSSTransition} from "react-transition-group";

interface ProductReviewsType {
    tab: number
}

export const ProductReviews: React.FC<ProductReviewsType> = ({tab}) => {
    return (
        <CSSTransition in={tab === 3} classNames="alert" timeout={300} unmountOnExit>
            <div>
                ProductReviews
            </div>
        </CSSTransition>
    )
};

