import React from "react";
import "./components/css/App.css";
import { Footer } from "./components/bloks/Footer/Footer";
import { Header } from "./components/bloks/Header/Header";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
