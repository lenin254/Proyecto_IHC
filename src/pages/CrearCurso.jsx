import React from 'react';
import { Link } from 'react-router-dom';

function CreateCourse() {
  return (
    <div className="flex flex-row min-h-screen bg-customBlue">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" />
        <h1 className="text-2xl font-bold text-gray-800">Educational Virtual Assistant</h1>
      </header>
      <div className="flex flex-grow">
        <main className="flex-grow p-8 flex justify-between gap-10">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Crear Curso</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xl font-bold text-gray-800 mb-2">Nombre del curso</label>
                <input
                  type="text"
                  placeholder="Inserte nombre del curso"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-xl font-bold text-gray-800 mb-2">Descripción</label>
                <textarea
                  placeholder="Inserte breve descripción del curso"
                  className="w-full p-2 border border-gray-300 rounded-md h-32"
                ></textarea>
              </div>
              <div className="flex space-x-4">
                <button type="submit" className="bg-black text-white rounded-md px-4 py-2">Crear Curso</button>
                <button type="button" className="bg-black text-white rounded-md px-4 py-2">Sugerencia del EVA</button>
              </div>
            </form>
          </div>
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-bold text-gray-800 mb-4">¡Hola!</h3>
            <p className="text-gray-600 mb-4">
              Soy EVA, tu asistente virtual educativo. ¿Estás buscando inspiración para crear tu curso? ¡No busques más! 
              Además de proporcionarte ayuda personalizada, también tengo sugerencias útiles en la descripción del curso. 
              ¡No dudes en echarle un vistazo y explorar las ideas que tengo para ti! Si necesitas más ayuda, aquí estoy para ayudarte en cada paso del camino!
            </p>
            <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateCourse;
