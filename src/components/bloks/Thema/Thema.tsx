import "./thema.css";
import {useTheme} from "../../../hooks/useTheme";
import {useEffect, useState} from 'react';


export const Thema: React.FC<{}> = () => {
    const {theme, setTheme} = useTheme();
    const [bulem, setBulem] = useState(false);

    const handalClick = () => {
        if (theme === "dark") {
            setTheme("light");
        } else if (theme === "light") {
            setTheme("dark");
        }
    };

    useEffect(() => {
        if (theme === "light") {
            setBulem(true);
        } else {
            setBulem(false);
        }
    }, [theme, bulem]);

    return (
        <>
            <div className="thema" onClick={handalClick}>
                <label className="themeMaySwitch">
                    <input type="checkbox"/>
                </label>
            </div>
        </>
    );
};
