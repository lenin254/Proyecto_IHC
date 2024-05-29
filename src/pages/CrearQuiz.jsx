import React, { useState } from "react";

function CreateQuiz() {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctOption: null },
  ]);

  const handleInputChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index][event.target.name] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectOptionChange = (qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correctOption = oIndex;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctOption: null },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col min-h-screen bg-customBlue">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" />
        <h1 className="text-2xl font-bold text-gray-800">
          Educational Virtual Assistant
        </h1>
      </header>
      <div className="flex flex-grow">
        <main className="flex-grow p-8 flex flex-col items-center gap-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Curso de python - Quiz
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-4xl">
            <div>
              <label className="block text-xl font-bold text-gray-800 mb-2">
                Nombre del quiz
              </label>
              <input
                type="text"
                placeholder="Inserte nombre del Quiz"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-xl font-bold text-gray-800 mb-2">
                Descripción del quiz
              </label>
              <textarea
                placeholder="Inserte breve instrucciones del quiz que vamos a publicar"
                className="w-full p-2 border border-gray-300 rounded-md h-32"
              ></textarea>
            </div>
            {questions.map((q, qIndex) => (
              <div
                key={qIndex}
                className="bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <label className="block text-xl font-bold text-gray-800 mb-2">
                  Pregunta {qIndex + 1}
                </label>
                <input
                  type="text"
                  name="question"
                  value={q.question}
                  onChange={(e) => handleInputChange(qIndex, e)}
                  placeholder="Ingrese la pregunta"
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <div className="space-y-2">
                  {q.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex items-center">
                      <input
                        type="radio"
                        name={`correctOption-${qIndex}`}
                        checked={q.correctOption === oIndex}
                        onChange={() =>
                          handleCorrectOptionChange(qIndex, oIndex)
                        }
                        className="mr-2"
                      />
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                        placeholder={`Opción ${oIndex + 1}`}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Agregar Pregunta
            </button>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-black text-white rounded-md px-4 py-2"
              >
                Crear Quiz
              </button>
              <button
                type="button"
                className="bg-black text-white rounded-md px-4 py-2"
              >
                Sugerencia del EVA
              </button>
            </div>
          </form>
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-xl font-bold text-gray-800 mb-4">¡Hola!</h3>
            <p className="text-gray-600 mb-4">
              Soy EVA, tu asistente virtual educativo. ¿Estás buscando
              inspiración para crear tu quiz? ¡No busques más! Además de
              proporcionarte ayuda personalizada, también tengo sugerencias
              útiles en la descripción del quiz. ¡No dudes en echarle un vistazo
              y explorar las ideas que tengo para ti! Si necesitas más ayuda,
              aquí estoy para ayudarte en cada paso del camino!
            </p>
            <img src="/assets/images/Image19.png" alt="EVA Logo" className="logo" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateQuiz;
