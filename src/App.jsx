import React, { useState } from "react";
import Cabecalho from "./Cabecalho";
import Home from "./Home";
import Servicos from "./Servicos";
import Reservas from "./Reservas";
import Contactos from "./Contactos";
import "./css/style.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "servicos":
        return <Servicos />;
      case "reservas":
        return <Reservas />;
      case "contactos":
        return <Contactos />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Cabecalho setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;



