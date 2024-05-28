import './RegistrarUsuarioWeb.css'
import { useNavigate } from 'react-router-dom';

export default function RegistrarUsuarioWeb() {
  const navigate = useNavigate();

  const handleregresarClick = () => {
    navigate('/');
  }

  const handleConocenosClick = () => {
    navigate('/main/ConocenosWeb');
  };

  return (
    <div className="registrar-usuario-web">
      <div className="image-18">
      </div>
      <div className="container-2">
        <div className="container-1">
          <div onClick={handleregresarClick} className="image-10">
          </div>
          <button onClick={handleConocenosClick} className="button1">Conocenos</button>
        </div>
        <div className="container-3">
          <div className="educational-virtual-assistant">
          Educational Virtual Assistant
          </div>
          <div className="content">
            <div className="copy">
              <div className="crea-una-cuenta">
              crea una cuenta
              </div>
              <span className="ingrese-su-correo-electrnico-para-registrarse-en-esta-aplicacin">
              Ingrese su correo electrónico para <br />
              registrarse en esta aplicación
              </span>
            </div>
            <div className="input-and-button">
              <div className="field">
                <span className="label">
                email@domain.com
                </span>
              </div>
              <div className="button">
                <span className="crear-con-email">
                crear con e-mail
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
              <img className="google" src="assets/vectors/Google1_x2.svg" />
              <span className="google-1">
              Google
              </span>
            </div>
            <p className="al-hacer-clic-en-continuar-acepta-nuestros-trminos-de-servicio-ypoltica-de-privacidad">
            <span className="al-hacer-clic-en-continuar-acepta-nuestros-trminos-de-servicio-ypoltica-de-privacidad-sub-0"></span><span className="al-hacer-clic-en-continuar-acepta-nuestros-trminos-de-servicio-ypoltica-de-privacidad-sub-10"></span><span className="al-hacer-clic-en-continuar-acepta-nuestros-trminos-de-servicio-ypoltica-de-privacidad-sub-0"></span><span></span>
            </p>
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
        <span className="hola-quieres-crear-una-cuenta-es-muy-fcil-solo-ingresa-tu-direccin-de-correo-electrnico-yluego-haz-clic-en-crear-con-email-te-enviaremos-un-correo-electrnico-con-los-detalles-de-tu-nueva-cuenta-incluida-tu-contrasea-prefieres-entrar-con-google-sin-problema-simplemente-haz-clic-en-google-yestars-listo-para-empezar-espero-que-disfrutes-de-tu-experiencia-en-nuestra-plataforma">
        ¡Hola! ¿Quieres crear una cuenta? ¡Es muy fácil! Solo ingresa tu dirección de correo electrónico y luego haz clic en &#39;Crear con e-mail&#39;. Te enviaremos un correo electrónico con los detalles de tu nueva cuenta, incluida tu contraseña. ¿Prefieres entrar con Google? ¡Sin problema! Simplemente haz clic en &#39;Google&#39; y estarás listo para empezar. ¡Espero que disfrutes de tu experiencia en nuestra plataforma!
        </span>
      </div>
    </div>
  )
}