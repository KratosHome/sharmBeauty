import {AboutAss} from "../pages/AboutAss/AboutAss";
import {Main} from "../pages/Main/Main";
import {UserAccount} from "../pages/UserAccount/UserAccount";
import {LikesPage} from "../pages/LikesPage/LikesPage";
import {PersonalAccount} from "../pages/PersonalAccount/PersonalAccount";
import {ProductsCatalog} from '../pages/ProductsCatalog/ProductsCatalog';
import ProductPage from "../pages/ProductPage/ProductPage";
import {NotFound} from "../pages/NotFound/NotFound";

export const ProviderRouter: any[] = [
    {path: "/about", component: <AboutAss/>},
    {path: "/login", component: <UserAccount/>},
    {path: "/likes", component: <LikesPage/>},
    {path: "/:id/", component: <ProductPage/>},
    {path: "/", component: <Main/>,},
    {path: "/makiyazh/", component: <ProductsCatalog/>},
    {path: "/*", component: <NotFound/>},
    {path: "/login/", component: <PersonalAccount/>},
];

