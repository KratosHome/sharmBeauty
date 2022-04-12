import { createContext } from "react";

interface IContextProps {
    isAuth: boolean;
    setIsAuth: any;
  }

export const LoginContext = createContext<IContextProps>({} as IContextProps)