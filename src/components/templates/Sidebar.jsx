import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome,FaBook,FaDoorClosed } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { HiChatAlt2, HiUserGroup } from "react-icons/hi";
import { DiAptana } from "react-icons/di";

const Items= [
  {
      title: 'Home',
      icon: <FaHome />,
      path: '/',
  },
  {
      title: 'Mis cursos',
      icon: <FaBook />,
      path: '/main/Curso',
  },
  {
      title: 'Quiz',
      icon: <ImPower />,
      path: '/main/CrearQuiz',
  },
  {
    title: 'Configuracion',
    icon: <DiAptana />,
    path: '/main/AutenticarUsuarioWeb',
  },
  {
    title: 'Conocenos',
    icon: <HiUserGroup />,
    path: '/main/ConocenosWeb',
},
  {
    title: 'Cerrar Sesión',
    icon: <FaDoorClosed />,
    path: '/main/AutenticarUsuarioWeb',
  }
]

/*
const coursesData = [
  {
    id: 'curso1',
    name: 'Curso1',
    items: [
      { name: 'Tema1', link: '/curso1/tema1' },
      { name: 'Evaluacion1', link: '/curso1/evaluacion1' },
    ],
  },
  // Agrega más cursos según sea necesario
];
*/

function Sidebar() {
  const [expanded, setExpanded] = useState({
    cursos: false,
  });

  const toggleExpand = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    /*
    <aside className="w-[250px] bg-gray-100 h-full p-4 flex flex-col justify-between">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="text-2xl text-blue-500 hover:text-green-500">Inicio</Link>
        </li>
        <li>
          <button onClick={() => toggleExpand('cursos')} className="text-2xl text-blue-500 hover:text-green-500">
            Cursos
          </button>
          {expanded.cursos && (
            <ul className="ml-4 mt-2 space-y-2">
              {coursesData.map((course) => (
                <li key={course.id}>
                  <button onClick={() => toggleExpand(course.id)} className="text-xl text-blue-500 hover:text-green-500">
                    {course.name}
                  </button>
                  {expanded[course.id] && (
                    <ul className="ml-4 mt-2 space-y-1">
                      {course.items.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link} className="text-lg text-blue-500 hover:text-green-500">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      <div className="mt-auto">
        <Link to="/" className="text-2xl text-blue-500 hover:text-green-500">Salir</Link>
      </div>
    </aside>*/
    <aside className="w-[260px] h-full p-4 flex flex-col justify-between">
          <ul className='mt-36'>
            {Items.map((item, index) => {
              return(
                <li className="my-16 flex-row items-center" key={index}>
                  <Link className="text-2xl text-blue-500 hover:text-green-500 flex items-center" to={item.path}>
                    {item.icon}
                    <span className="ml-3">{ item.title }</span>
                  </Link>
                </li>
              );
            })}
          </ul>
    </aside>
  );
}

export default Sidebar;
