import React from "react";
import { Link } from "react-router-dom";

function CourseView() {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-blue-100">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" />
        <h1 className="text-2xl font-bold text-gray-800">
          Educational Virtual Assistant
        </h1>
      </header>
      <div className="flex flex-grow">
        
        <main className="flex-grow p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Curso de Python
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Agregar un Tema
              </h3>
              <p className="text-gray-600 mb-4">
                Dale al botón para agregar un tema del curso
              </p>
              <button className="bg-blue-500 text-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
                +
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Crear un quiz
              </h3>
              <p className="text-gray-600 mb-4">
                Dale al botón para crear un quiz en tu curso
              </p>
              <button className="bg-blue-500 text-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
                +
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Agregar a la clase
            </h3>
            <button className="bg-blue-500 text-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
              +
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <div className="flex items-center mb-4">
              <img
                src="/assets/images/Rectangle11.png"
                alt="Profesor Carlos"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-800 font-bold">Profesor Carlos</p>
                <p className="text-gray-600">Hace 2 horas</p>
              </div>
            </div>
            <p className="text-gray-800 mb-4">
              Bienvenidos todos al curso de python, en esta semana vamos a tener
              nuestra primera presentación, también estaré subiendo el material
              en estas fechas
            </p>
            <div className="flex items-center text-gray-600">
              <span className="mr-4">6 likes</span>
              <span>18 comments</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CourseView;
