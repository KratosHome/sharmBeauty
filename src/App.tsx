import React, { useEffect, useState } from "react";
import "./components/css/App.css";
import { Footer } from "./components/bloks/Footer/Footer";
import { Header } from "./components/bloks/Header/Header";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { LoginContext } from "./context";


const App: React.FC = () => {
  
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isAuth, setIsAuth }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
  );
};

export default App;
