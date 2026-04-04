import React, { useState, useEffect } from "react";
import Cabecalho from "./Cabecalho";
import Home from "./Home";
import Servicos from "./Servicos.jsx";
import Reservas from "./Reservas";
import Contactos from "./Contactos";
import SobreNos from "./SobreNos.jsx";
import Loader from "./Loader";
import "./css/style.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
      case "sobre":
        return <SobreNos setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <Cabecalho setCurrentPage={setCurrentPage} />
          <main>{renderPage()}</main>
        </>
      )}
    </div>
  );
}

export default App;