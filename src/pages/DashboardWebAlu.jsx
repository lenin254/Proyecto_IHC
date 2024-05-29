import React from 'react';
import './DashboardWebAlu.css';

export default function DashboardWebAlu() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" />
        <h1 className="title">Educational Virtual Assistant</h1>
      </header>
      <main className="main-content">
        <div className="courses">
          <h2>Mis Cursos</h2>
          <div className="course-list">
            <p>Aun no tienes cursos a tu cargo</p>
            <button className="add-course-button">+</button>
          </div>
        </div>
        <div className="chat">
          <div className="chat-message user-message">
            <p>Hola EVA, estoy interesado en crear un nuevo curso para mis estudiantes. ¿Tienes alguna sugerencia sobre qué tema debería abordar?</p>
          </div>
          <div className="chat-message eva-message">
            <p>¡Hola profesor! Crear un curso sobre Python puede ser una excelente opción. Python es un lenguaje de programación muy popular y versátil que se utiliza en una amplia variedad de aplicaciones, desde desarrollo web hasta análisis de datos y machine learning.</p>
          </div>
          <div className="chat-message user-message">
            <p>Muchas gracias</p>
          </div>
          <input type="text" placeholder="Conversa conmigo" className="chat-input" />
        </div>
      </main>
      <footer className="footer">
        <span></span>
        <p>Educational Virtual Assistant (EVA 1.0)</p>
      </footer>
    </div>
  );
}
