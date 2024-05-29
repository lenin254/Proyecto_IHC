import React from 'react';
import './DashboardWebPro.css';

export default function DashboardWebPro() {
  return (
    
    <div className="dashboard-container">
      <header className="header">
        <img src="/assets/images/logo.png" alt="EVA Logo" className="logo" />
        <h1 className="title">Educational Virtual Assistant</h1>
      </header>
      <main className="main-content">
        <div className="welcome-message">
          <p>¡Hola! Soy EVA, tu asistente virtual educativo. Estoy aquí para ayudarte a navegar por nuestra plataforma y sacar el máximo provecho de tu experiencia de aprendizaje. ¿Listo para empezar? Simplemente dale al botón de 'Iniciar Sesión' si ya tienes una cuenta o 'Crear Cuenta' si eres nuevo aquí. ¡Estoy emocionado de acompañarte en tu viaje de aprendizaje!</p>
        </div>
        <div className="buttons-container">
          <button className="button">Iniciar Sesión</button>
          <button className="button">Crear cuenta</button>
        </div>
      </main>
      <footer className="footer">
        <span className="footer-link">Conocenos</span>
        <p>Educational Virtual Assistant (EVA 1.0)</p>
      </footer>
    </div>

  );

}
