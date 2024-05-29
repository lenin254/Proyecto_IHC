import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioWeb from './pages/InicioWeb';
import { sv_url } from './routes/sv.web'; 
import { publicRoutes } from './routes/routes';
import ConocenosWeb from './pages/ConocenosWeb';
import AutenticarUsuarioWeb from './pages/AutenticarUsuarioWeb';
import RegistrarUsuarioWeb from './pages/RegistrarUsuarioWeb';
import DashboardWebPro from './pages/DashboardWebPro';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioWeb />} />
        <Route path={`${sv_url.DEV}${publicRoutes.CONOCENOS}`} element={<ConocenosWeb />} />
        <Route path={`${sv_url.DEV}${publicRoutes.AUTENTICAR}`} element={<AutenticarUsuarioWeb />} />
        <Route path={`${sv_url.DEV}${publicRoutes.REGISTRO}`} element={<RegistrarUsuarioWeb />} />
        <Route path={`${sv_url.DEV}${publicRoutes.DASHBOARDPRO}`} element={<DashboardWebPro />} />
        {/* Añade aquí otras rutas para tus otras páginas */}
      </Routes>
    </Router>
  );
}

export default App;