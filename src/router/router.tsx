import {AboutAss} from "../pages/AboutAss/AboutAss";
import {Main} from "../pages/Main/Main";
import {UserAccount} from "../pages/UserAccount/UserAccount";
import {LikesPage} from "../pages/LikesPage/LikesPage";
import {PersonalAccount} from "../pages/PersonalAccount/PersonalAccount";
import {ProductsCatalog} from '../pages/ProductsCatalog/ProductsCatalog';
import ProductPage from "../pages/ProductPage/ProductPage";
import {NotFound} from "../pages/NotFound/NotFound";
import {CardPage} from "../pages/CardPage/CardPage";
import {SalePages} from "../pages/SalePages/SalePages";
import {SalePage} from "../pages/SalePage/SalePage";

export const ProviderRouter: any[] = [
    {path: "/", component: <Main/>,},
    {path: "/about", component: <AboutAss/>},
    {path: "/login", component: <UserAccount/>},
    {path: "/likes", component: <LikesPage/>},
    {path: "/promotions", component: <SalePages/>},
    {path: "promotions/:id/", component: <SalePage/>},
    {path: "product/:id/", component: <ProductPage/>},
    {path: "/*", component: <NotFound/>},
    {path: "/makiyazh/", component: <ProductsCatalog/>},
    {path: "/parfumeriya/", component: <ProductsCatalog/>},
    {path: "/hair/", component: <ProductsCatalog/>},
    {path: "/oblychchya/", component: <ProductsCatalog/>},
    {path: "/tilo_i_vanna/", component: <ProductsCatalog/>},
    {path: "/cholovikam/", component: <ProductsCatalog/>},
    {path: "/card/", component: <CardPage/>},
    {path: "/login/", component: <PersonalAccount/>},
];

