import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<aside className='w-[150px]'>
            <Link to='/' className='text-2xl text-red-500 hover:text-green-500'>Inicio</Link>
			<p> prueba 1</p>
			<p> prueba 2</p>
		</aside>
	);
}

export default Sidebar;
