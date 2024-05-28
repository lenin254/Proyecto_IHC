import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InicioWeb } from './pages/InicioWeb';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioWeb />} />
        
        {/* Añade aquí otras rutas para tus otras páginas */}
      </Routes>
    </Router>
  );
}

export default App
