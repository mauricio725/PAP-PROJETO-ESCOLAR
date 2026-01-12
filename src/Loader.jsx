import React, { useEffect, useState } from "react";
import icon from "./img/icone1.png"; // <-- IMPORTA O ÍCONE
import "./css/style.css";
const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-overlay">
  <div className="loader-circle">
    <div className="spinner"></div>
    <img src={icon} alt="icon" className="loader-icon" />
  </div>
</div>

  );
};

export default Loader;

