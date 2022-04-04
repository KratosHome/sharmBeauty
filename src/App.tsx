import React from "react";
import "./components/css/App.css";
import { Footer } from "./components/bloks/Footer/Footer";
import { Header } from "./components/bloks/Header/Header";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};

export default App;
