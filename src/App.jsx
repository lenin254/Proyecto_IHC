import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/templates/Sidebar';

function App() {
	const location = useLocation();

	const hideSidebar = (pathname) => {
		return pathname === '/main/AutenticarUsuarioWeb' || pathname === '/main/RegistrarUsuarioWeb' || pathname === '/';
	};

	return (
		<main className='flex flex-row'>
			{!hideSidebar(location.pathname) && <Sidebar />}
			<Outlet />
		</main>
	);
}

export default App;
