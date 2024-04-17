import { useState } from "react";

const Formulario = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userEmail === "adrianlerma@gmail.com" &&
      userPassword === "pipipopo123"
    ) {
      // Credenciales correctas, redirigir a otra página
    } else {
      // Credenciales incorrectas, mostrar mensaje de error
      setError("El correo o la contraseña son incorrectos, intente de nuevo");
    }
  };

  return (
    <div
      id="formulario"
      className="flex flex-col h-[872px] items-center justify-center"
    >
      <h1 className="text-white text-5xl m-8">Iniciar sesión</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-white text-xl px-2">Correo del usuario</label>
        <input
          className="text-black px-2 mb-3 rounded-lg w-80 h-8 mx-3"
          type="email"
          name="userEmail"
          id="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Ingrese su correo"
          autoComplete="off"
        />
        <label className="text-white text-xl px-2">Contraseña</label>
        <input
          className="text-black px-2 mb-4 rounded-lg w-80 h-8 mx-3"
          type="password"
          name="userPassword"
          id="userPassword"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Ingrese su contraseña"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-orange-500 rounded-lg text-black mx-3 h-10 text-xl hover:scale-105 transition-transform hover:bg-orange-700 hover:text-white hover:duration-300"
        >
          Ingresar
        </button>
        {error && <p className="text-red-500 ">{error}</p>}
      </form>
    </div>
  );
};

export default Formulario;
