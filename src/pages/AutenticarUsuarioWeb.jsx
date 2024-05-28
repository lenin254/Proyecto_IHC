import './AutenticarUsuarioWeb.css'
import { useNavigate } from 'react-router-dom';

export default function AutenticarUsuarioWeb() {
  const navigate = useNavigate();

  const handleregresarClick = () => {
    navigate(-1);
  }

  const handleConocenosClick = () => {
    navigate('/main/ConocenosWeb');
  };

  const handleRegisterClick = () => {
    navigate('/main/RegistrarUsuarioWeb'); // Ruta a la página de registro
  };

  const handleLoginClick = () => {
    // Aquí agregarías la lógica de autenticación
    alert("Iniciar sesión con email");
  };

  return (
    <div className="autenticar-usuario-web">
      
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
          <input type="password" placeholder="Contraseña" className="input-field" />
          <button onClick={handleLoginClick} className="login-button">Iniciar Sesión</button>
          <button onClick={handleRegisterClick} className="register-button">Registrar Usuario</button>
        </div>

        <button onClick={handleConocenosClick} className="button1">Conocenos</button>
      </div>
      <div className="container">
        
      <div className="message-box">
          <p>¡Hola de nuevo! Soy EVA, tu asistente virtual educativo. ¿Necesitas ayuda para iniciar sesión? No te preocupes, estoy aquí para ayudarte en cada paso del camino. Por favor, introduce tu correo y contraseña en los campos correspondientes y luego haz clic en &#39;Autenticar con e-mail&#39; o por Google. Si aún no tienes una cuenta, puedes crear una haciendo clic en &#39;Crear una Cuenta&#39; y seguir los sencillos pasos. ¡Estoy aquí para hacer que tu experiencia sea lo más fluida posible!</p>
          <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" />
        </div>



      </div>
      <span className="educational-virtual-assistant-eva-10">
        Educational Virtual Assistant (EVA 1.0)
      </span>
      
    </div>
  );
}