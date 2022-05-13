import {Route, Routes} from "react-router";
import {ProviderRouter} from "./router";
import {LoginContext} from "../context/LoginContext";
import {useContext} from "react";
import {PersonalAccount} from "../pages/PersonalAccount/PersonalAccount";

export const AppRouter: React.FC<{}> = () => {
    const {isAuth} = useContext(LoginContext);

    if (isAuth === true) {
        ProviderRouter.push({path: "/login", component: <PersonalAccount/>, exact: true},)
    } else if (isAuth === false) {
        ProviderRouter.pop()
    }


    return (
        <>
            <Routes>
                {ProviderRouter.map((rote) => (
                    <Route key={rote.path} path={rote.path} element={rote.component} />
                ))}
            </Routes>
        </>
    );
};
