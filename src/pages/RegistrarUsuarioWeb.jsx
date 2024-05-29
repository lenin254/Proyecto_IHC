// src/pages/RegistrarUsuarioWeb.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrarUsuarioWeb.css';

export default function RegistrarUsuarioWeb() {
  const navigate = useNavigate();

  const handleregresarClick = () => {
    navigate(-1);
  };

  const handleConocenosClick = () => {
    navigate('/main/ConocenosWeb');
  };

  const handleRegisterEmailClick = () => {
    // Aquí agregarías la lógica de autenticación
    alert("Usuario registrado");
    navigate("/main/AutenticarUsuarioWeb"); 
  };


  return (
    <div className="registrar-usuario-web">
      
      <div className="container-2">
      <div onClick={handleregresarClick} className="image-10">
        </div>
        <header className="header">
        <h1>Educational Virtual Assistant</h1>
        </header>
        <div className="login-form">
          <h2>Autenticación de usuario</h2>
          <p>Ingrese su correo electrónico para autenticarse en esta aplicación</p>
          <input type="email" placeholder="Correo electrónico" className="input-field" />
          <button onClick={handleRegisterEmailClick} className="login-button">Crear con e-mail</button>
        </div>

        <button onClick={handleConocenosClick} className="button1">Conocenos</button>
      </div>
      <div className="container">
        
      <div className="message-box">
          <p>¡Hola! ¿Quieres crear una cuenta? ¡Es muy fácil! Solo ingresa tu dirección de correo electrónico y luego haz clic en &#39;Crear con e-mail&#39;. Te enviaremos un correo electrónico con los detalles de tu nueva cuenta, incluida tu contraseña. ¿Prefieres entrar con Google? ¡Sin problema! Simplemente haz clic en &#39;Google&#39; y estarás listo para empezar. ¡Espero que disfrutes de tu experiencia en nuestra plataforma!</p>
          <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" />
        </div>



      </div>
      <span className="educational-virtual-assistant-eva-10">
        Educational Virtual Assistant (EVA 1.0)
      </span>
      
    </div>
  );
}
