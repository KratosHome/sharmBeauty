import "./ProdcutDescription.css"
import {CSSTransition} from "react-transition-group";

interface ProdcutDescriptionType {
    tab: number
}

export const ProdcutDescription: React.FC<ProdcutDescriptionType> = ({tab}) => {
    return (
        <CSSTransition in={tab === 2} classNames="alert" timeout={300} unmountOnExit>
            <div>
                ProdcutDescription
            </div>
        </CSSTransition>
    )
};

