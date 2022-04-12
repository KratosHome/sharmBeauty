import { AboutAss } from "../pages/AboutAss/AboutAss";
import { Main } from "../pages/Main/Main";
import { UserAccount } from "../pages/UserAccount/UserAccount";
import { LikesPage } from "../pages/LikesPage/LikesPage";
import { PersonalAccount } from "../pages/PersonalAccount/PersonalAccount";

export const ProviderRouter: any[] = [
  { path: "/about", component: <AboutAss />, exact: true },
  { path: "/login", component: <UserAccount />, exact: true },
  { path: "/likes", component: <LikesPage />, exact: true },
  { path: "/", component: <Main />, exact: true },
];

export const UserPagaes: any[] = [
  { path: "/login", component: <PersonalAccount />, exact: true },
];
