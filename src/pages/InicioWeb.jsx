// src/pages/InicioWeb.jsx
import React from 'react';
import './InicioWeb.css'; // Asegúrate de crear este archivo CSS también

const InicioWeb = () => {
  return (
    <div className="inicio-container">
      <header className="header">
        
        <h1>Educational Virtual Assistant</h1>
      </header>
      <main className="main-content">
        <div className="message-box">
          <p>¡Hola! Soy EVA, tu asistente virtual educativo. Estoy aquí para ayudarte a navegar por nuestra plataforma y sacar el máximo provecho de tu experiencia de aprendizaje. ¿Listo para empezar? Simplemente dale al botón de 'Iniciar Sesión' si ya tienes una cuenta o 'Crear Cuenta' si eres nuevo aquí. ¡Estoy emocionado de acompañarte en tu viaje de aprendizaje!</p>
          <img src="assets/images/Image19.png" alt="EVA Logo" className="logo" />
        </div>
        
        <div className="buttons-container">
          <button className="button">Iniciar Sesión</button>
          <button className="button">Crear cuenta</button>
        </div>
      </main>
      <footer className="footer">
        <button href="/ConocenosWeb" className="footer-link">Conocenos</button>
        <p>Educational Virtual Assistant (EVA 1.0)</p>
      </footer>
    </div>
  );
};

export default InicioWeb;
