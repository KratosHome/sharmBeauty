import {AboutAss} from "../pages/AboutAss/AboutAss";
import {Main} from "../pages/Main/Main";
import {UserAccount} from "../pages/UserAccount/UserAccount";
import {LikesPage} from "../pages/LikesPage/LikesPage";
import {PersonalAccount} from "../pages/PersonalAccount/PersonalAccount";
import {ProductsCatalog} from '../pages/ProductsCatalog/ProductsCatalog';
import ProductPage from "../pages/ProductPage/ProductPage";
import {NotFound} from "../pages/NotFound/NotFound";
import {CardPage} from "../pages/CardPage/CardPage";

export const ProviderRouter: any[] = [
    {path: "/about", component: <AboutAss/>},
    {path: "/login", component: <UserAccount/>},
    {path: "/likes", component: <LikesPage/>},
    {path: "product/:id/", component: <ProductPage/>},
    {path: "/", component: <Main/>,},
    {path: "/*", component: <NotFound/>},
    {path: "/makiyazh/", component: <ProductsCatalog/>},
    {path: "/card/", component: <CardPage/>},
    {path: "/login/", component: <PersonalAccount/>},
];

