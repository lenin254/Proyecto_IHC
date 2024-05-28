import './ConocenosWeb.css'
import { useNavigate } from 'react-router-dom';

export default function ConocenosWeb() {
  const navigate = useNavigate();

  const handleregresarClick = () => {
    navigate(-1);
  }

  return (
    <div className="conocenos-web">
      <div className="image-10">
      </div>
      <div className="container">
        <div onClick={handleregresarClick} className="image-19">
        </div>
        <div className="educational-virtual-assistant">
        Educational Virtual Assistant
        </div>
        <div className="frame-2610367">
          <span className="bienvenido-ala-seccin-concenos-permteme-presentarte-alos-creadores-detrs-de-esta-plataforma-somos-un-equipo-apasionado-de-desarrolladores-dedicados-aproporcionarte-la-mejor-experiencia-de-aprendizaje-en-lnea-desde-el-diseo-hasta-la-implementacin-hemos-trabajado-arduamente-para-crear-una-plataforma-que-se-adapte-atus-necesidades-educativas-esperamos-que-disfrutes-de-lo-que-hemos-creado-para-ti">
          ¡Bienvenido a la sección &#39;Conócenos&#39;! Permíteme presentarte a los creadores detrás de esta plataforma. Somos un equipo apasionado de desarrolladores dedicados a proporcionarte la mejor experiencia de aprendizaje en línea. Desde el diseño hasta la implementación, hemos trabajado arduamente para crear una plataforma que se adapte a tus necesidades educativas. ¡Esperamos que disfrutes de lo que hemos creado para ti!
          </span>
          <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" /> 
        </div>
        <div className="large-grid">
          <div className="card">
            <div className="graphic">
            </div>
            <div className="copy">
              <span className="pool-lsalvatierra-a">
              Pool L. Salvatierra A.
              </span>
              <span className="ceo-yfundador-de-eva-corporation">
              CEO y fundador de EVA corporation. 
              </span>
            </div>
          </div>
          <div className="card-1">
            <div className="image">
            </div>
            <div className="copy-1">
              <span className="manuel-afatama-r">
              Manuel A. Fatama R.
              </span>
              <span className="arquitecto-cloud">
              Arquitecto Cloud 
              </span>
            </div>
          </div>
          <div className="card-2">
            <div className="image-1">
            </div>
            <div className="copy-2">
              <span className="bruno-gcipriano-a">
              Bruno G. Cipriano A.
              </span>
              <span className="desarrollador-web">
              Desarrollador WEB
              </span>
            </div>
          </div>
        </div>
        <span className="educational-virtual-assistant-eva-10">
        Educational Virtual Assistant (EVA 1.0)
        </span>
      </div>
    </div>
  )
}