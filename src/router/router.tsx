import { AboutAss } from "../pages/AboutAss/AboutAss";
import { Main } from "../pages/Main/Main";
import { UserAccount } from "../pages/UserAccount/UserAccount";
import { LikesPage } from "../pages/LikesPage/LikesPage";
import { PersonalAccount } from "../pages/PersonalAccount/PersonalAccount";
import { ProductsCatalog } from '../pages/ProductsPage/ProductsCatalog';
import ProductPage from "../pages/ProductPage/ProductPage";
import {LoginContext} from "../context";
import {useContext} from "react";


export const ProviderRouter: any[] = [
  { path: "/about", component: <AboutAss />, exact: true },
  { path: "/login", component: <UserAccount />, exact: true },
  { path: "/likes", component: <LikesPage />, exact: true },
  { path: "/makiyazh/:id", component: <ProductPage/>, exact: true },
  { path: "/", component: <Main />, exact: true },
  { path: "/makiyazh", component: <ProductsCatalog/>, exact: true },
  { path: "/login", component: <PersonalAccount />, exact: true },
];

