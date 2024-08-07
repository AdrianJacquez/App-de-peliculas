import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { eye } from "react-icons-kit/icomoon/eye";
import Swal from "sweetalert2";

const Formulario = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);

  useEffect(() => {
    Swal.fire({
      title: "CORREO Y CONTRASEÑA",
      text: "CORREO: user@gmail.com / CONTRASEÑA: user123",
      icon: "info",
      color: "#F97316",
      iconColor: "#F97316",
      confirmButtonColor: "#F97316", // Cambia el color del botón de confirmación
      confirmButtonText: "Ver ya",
      background: "#111827",
    });
  }, []);

  const handleSubmit = (e) => {
    //el e.PreventDefaul evita la propagacion y acciones predeterminada del navegador
    e.preventDefault();
    //este if pregunta si las variables son completamente iguales a los datos entre comillas
    if (userEmail === "user@gmail.com" && userPassword === "user123") {
      // Credenciales correctas, redirigir a otra página
      //se muestra una alert para confirmar y luego se redirige al usuario a la page peliculas
      Swal.fire({
        title: "Iniciaste sesion correctamente",
        text: "Disfruta de todas las peliculas disponibles",
        icon: "success",
        color: "#F97316",
        iconColor: "#F97316",
        confirmButtonColor: "#F97316", // Cambia el color del botón de confirmación
        confirmButtonText: "Ver ya",
        background: "#111827",
      });
      navigate("/Peliculas");
    } else {
      //si no son correctos muestra un aler de error y informando el error
      Swal.fire({
        icon: "error",
        title: "Lo siento",
        text: "El correo o la contraseña son incorrectos, !CHECALOS BIEN¡",
        color: "#F97316",
        iconColor: "#F97316",
        confirmButtonColor: "#F97316", // Cambia el color del botón de confirmación
        confirmButtonText: "Probar de nuevo",
        background: "#111827",
      });
    }
  };

  //este handle es llamado cuando se le da click al ojo en el input de tipo password el cual esconde o muestra su contenido, si es tipo password cambia al ojo abierto y cambia su tipo a text, y si no cambia el icono a ojobloqueado y cambia su tipo a password, al ser tipo password el contenido se mustra como puntos y al ser text se muestra como texto comun
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeBlocked);
      setType("password");
    }
  };

  return (
    <div
      id="formulario"
      className="flex flex-col items-center h- justify-center bg-gray-900"
    >
      <h1 className="text-white text-6xl text-center m-6 hover:text-orange-500">
        Iniciar sesión
      </h1>
      <form className="flex flex-col">
        <label className="text-white text-xl px-2">Correo del usuario</label>
        <input
          className="text-black px-2 mb-3 rounded-lg w-80 h-10 mx-3"
          type="email"
          name="userEmail"
          id="userEmail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Ingrese su correo"
          autoComplete="on"
        />
        <label className="text-white text-xl px-2">Contraseña</label>
        <div className="mb-4 flex relative items-center">
          <input
            className="text-black pl-2 pr-10 mb-4 rounded-lg w-80 h-10 ml-3"
            type={type}
            name="userPassword"
            id="userPassword"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            autoComplete="on"
          />
          <span
            className="absolute top-0 right-0 flex items-center mr-3 h-full"
            onClick={handleToggle}
          >
            <Icon icon={icon} size={25} />
          </span>
        </div>

        <button
          type="submit"
          className="bg-orange-600 rounded-lg text-black w-80 mx-3 h-10 text-xl hover:scale-105 transition-transform  hover:text-white hover:duration-300"
          onClick={handleSubmit}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
