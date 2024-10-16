import React from 'react';
import './About.css'; // Archivo CSS para la página
import backgroundImage from '../assets/img/background-login.jpg'; // Ajusta la ruta a tu imagen de fondo

const History = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <div className="logo">
          <img src="path-to-your-logo.png" alt="LogiTransporte" />
          <h1>LOGITRANSPORTE</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/nuevo-viaje">Nuevo Viaje</a></li>
            <li><a href="/historial">Historial</a></li>
            <li><a href="/seguimiento">Seguimiento</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div className="about-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="about-text">
          <h2>NUESTRA HISTORIA</h2>
          <h1>LOGITRANSPORTE</h1>
          <p>
            LogiTransportes comenzó en 1990, pero su origen se remonta a los años 50,
            cuando Jorge Martínez, con una simple camioneta, inició el transporte de
            mercaderías en San Antonio de Areco. Junto a su esposa Ana, enfrentaron largas
            rutas y desafíos, y en 1972 compraron su primer camión, un Mercedes-Benz L1114,
            lo que les permitió crecer poco a poco.
          </p>
          <p>
            En 1990 formalizaron su empresa y establecieron su primera sede en Pilar, con una
            sucursal en Córdoba que se convirtió en un punto clave para sus operaciones. A lo
            largo de los años, LogiTransportes amplió su flota y adoptó nuevas tecnologías de
            logística.
          </p>
          <p>
            Hoy, con más de 300 empleados y una red que cubre todo el país, LogiTransportes
            sigue avanzando, con la misma dedicación y compromiso que Jorge y Ana
            tuvieron desde el principio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;