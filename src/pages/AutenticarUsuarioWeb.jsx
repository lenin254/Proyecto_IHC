import './AutenticarUsuarioWeb.css'
import { useNavigate } from 'react-router-dom';

export default function AutenticarUsuarioWeb() {
  const navigate = useNavigate();

  const handleregresarClick = () => {
    navigate('/');
  }

  const handleConocenosClick = () => {
    navigate('/main/ConocenosWeb');
  };


  return (
    <div className="autenticar-usuario-web">
      <div className="image-18">
      </div>
      <div className="container-1">
        <div className="container-3">
          <div onClick={handleregresarClick} className="image-19">
          </div>
          <button onClick={handleConocenosClick} className="button1">Conocenos</button>
        </div>
        <div className="container-2">
          <div className="educational-virtual-assistant">
          Educational Virtual Assistant
          </div>
          <div className="content">
            <div className="copy">
              <div className="autenticacin-de-usuario">
              Autenticación de usuario
              </div>
              <span className="ingrese-su-correo-electrnico-para-autenticarse-en-esta-aplicacin">
              Ingrese su correo electrónico para <br />
              autenticarse en esta aplicación
              </span>
            </div>
            <div className="input-and-button">
              <div className="field">
                <span className="label">
                email@domain.com
                </span>
              </div>
              <div className="field-1">
                <span className="label-1">
                ************************
                </span>
              </div>
              <div className="button">
                <span className="autenticar-con-email">
                Autenticar con e-mail
                </span>
              </div>
            </div>
            <div className="divider">
              <div className="divider-1">
              </div>
              <span className="ocontinuar-con">
              o continuar con
              </span>
              <div className="divider-2">
              </div>
            </div>
            <div className="button-1">
              <img className="google" src="assets/vectors/Google_x2.svg" />
              <span className="google-1">
              Google
              </span>
            </div>
            <div className="button-2">
              <span className="crear-una-cuenta">
              Crear una cuenta
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <span className="educational-virtual-assistant-eva-10">
          Educational Virtual Assistant (EVA 1.0)
          </span>
        </div>
      </div>
      <div className="image-12">
      </div>
      <div className="frame-2610368">
        <span className="hola-de-nuevo-soy-eva-tu-asistente-virtual-educativo-necesitas-ayuda-para-iniciar-sesin-no-te-preocupes-estoy-aqu-para-ayudarte-en-cada-paso-del-camino-por-favor-introduce-tu-correo-ycontrasea-en-los-campos-correspondientes-yluego-haz-clic-en-autenticar-con-email-opor-google-si-an-no-tienes-una-cuenta-puedes-crear-una-haciendo-clic-en-crear-una-cuenta-yseguir-los-sencillos-pasos-estoy-aqu-para-hacer-que-tu-experiencia-sea-lo-ms-fluida-posible">
        ¡Hola de nuevo! Soy EVA, tu asistente virtual educativo. ¿Necesitas ayuda para iniciar sesión? No te preocupes, estoy aquí para ayudarte en cada paso del camino. Por favor, introduce tu correo y contraseña en los campos correspondientes y luego haz clic en &#39;Autenticar con e-mail&#39; o por Google. Si aún no tienes una cuenta, puedes crear una haciendo clic en &#39;Crear una Cuenta&#39; y seguir los sencillos pasos. ¡Estoy aquí para hacer que tu experiencia sea lo más fluida posible!
        </span>
      </div>
    </div>
  )
}