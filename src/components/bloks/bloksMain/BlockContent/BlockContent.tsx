import {MayButton} from "../../../UL/MayButton/MayButton";
import "./BlockContent.css"

interface buttonMain {
    buttonName: string,
    className?: string,
    title: string,
}

export const BlockContent: React.FC<buttonMain> = ({buttonName, className, title}) => {
    return (
        <div className={className}>
            <div className="BlockMainButton">
                <h4 className="BlockMainName">{title}</h4>
                <MayButton>{buttonName}</MayButton>
            </div>
        </div>
    )
};