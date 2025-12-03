import React, { useEffect, useState } from 'react';
import './css/style.css'; // garante que o CSS do loader está carregado
import icon1 from './img/icone1.png'; // ajusta o caminho da imagem

export default function Loader({ onFinish }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 1500); // tempo de carregamento
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader">
        <img src={icon1} alt="Logo" className="loader-icon" />
        <div className="loader-circle"></div>
      </div>
    </div>
  );
}
