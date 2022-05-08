import "./MayButton.css";

type Props = {
    onClick?: any,
    props?: any,
    disabled?: any
    style?: any
}

export const MayButton: React.SFC<Props> = ({children, onClick, ...props}) => {
    return (
        <button {...props} className="may_btn" onClick={onClick}>
            <span>{children}</span>
        </button>
    );
};
