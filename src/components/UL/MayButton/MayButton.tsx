import "./MayButton.css";

type Props = {
    onClick?: any,
    props?: any,
    disabled?: any
    style?: any
    TruFolse?: any,
}

export const MayButton: React.SFC<Props> = ({children,TruFolse, onClick, style, ...props}) => {
    return (
        <button {...props} className={TruFolse ? "may_btn may_btn2" : "may_btn"} onClick={onClick}>
            <span>{children}</span>
            </button>
            );
        };
