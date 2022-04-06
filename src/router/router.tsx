import { AboutAss } from "../pages/AboutAss/AboutAss";
import { Main } from "../pages/Main/Main";

export const ProviderRouter: any[]= [
  { path: "/about", component: <AboutAss />, exact: true },
  { path: "/", component: <Main/>, exact: true },
];
