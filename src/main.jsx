import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// routes
import { sv_url } from './routes/sv.web';
import { publicRoutes } from './routes/routes';

// Pages
import App from './App';
import InicioWeb from './pages/InicioWeb';
import ConocenosWeb from './pages/ConocenosWeb';
import AutenticarUsuarioWeb from './pages/AutenticarUsuarioWeb';
import RegistrarUsuarioWeb from './pages/RegistrarUsuarioWeb';
import DashboardWebPro from './pages/DashboardWebPro';

// tailwind
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <InicioWeb />,
			},
			{
				path: `${sv_url.DEV}${publicRoutes.CONOCENOS}`,
				element: <ConocenosWeb />,
			},
			{
				path: `${sv_url.DEV}${publicRoutes.AUTENTICAR}`,
				element: <AutenticarUsuarioWeb />,
			},
			{
				path: `${sv_url.DEV}${publicRoutes.REGISTRO}`,
				element: <RegistrarUsuarioWeb />,
			},
			{
				path: `${sv_url.DEV}${publicRoutes.DASHBOARDPRO}`,
				element: <DashboardWebPro />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
