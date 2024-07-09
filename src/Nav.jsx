import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { clapperboard } from "react-icons-kit/entypo/clapperboard";
import { iosEye } from "react-icons-kit/ionicons/iosEye";
import { iosHeart } from "react-icons-kit/ionicons/iosHeart";
import { signOut } from "react-icons-kit/oct/signOut";
import Icon from "react-icons-kit";
import Swal from "sweetalert2";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  //despues de clickear la opcion de cerrar sesion muestra un alerta de comfirmacion o cancelacion, al comfirmar muestra un mensaje para preguntar si esta seguro, al dar que si el usuario es dirigido con navigate al login y sele muestra un mensaje de que cerro con exito, en caso de arrepentirse solo vuelve a dodne estaba antes
  const handleAlertCerrar = () => {
    Swal.fire({
      title: "Estas seguro que quieres cerrar sesion?",
      icon: "question",
      color: "#F97316",
      iconColor: "#F97316",
      showCancelButton: true,
      confirmButtonColor: "#F97316",
      cancelButtonColor: "#F97316",
      cancelButtonText: "Cancelar",
      background: "#111827",
      confirmButtonText: "!Si, cerrar sesion¡",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sesion cerrada",
          text: "Tu sesion ha sido cerrada correctamente",
          icon: "success",
          showConfirmButton: true,
          timer: 2500,
          confirmButtonColor: "#F97316",
          iconColor: "#F97316",
          background: "#111827",
          color: "#F97316",
        });
        // Devuelve true si se confirma la acción
        navigate("/");
      }
    });
  };

  return (
    <>
     {/*este condiciona el mosrtar el navegador solo si la route no es igual a la del login, en la cual no se tiene que mostrar el nav */}
      {location.pathname !== "/" && (
        <nav
          className="Navegador text-decoration-none w-full h-[60px] bg-orange-500 
         "
        >
          <ul
            id="Opciones"
            className="p-6 w-full h-full text-2xl flex justify-between items-center"
          >
            <li className=" flex  hover:scale-105 transition-transform  hover:text-white hover:duration-800">
              <Link to="/Peliculas">
                {" "}
                <Icon
                  className="h-0 hidden sm:inline"
                  size={32}
                  icon={clapperboard}
                />
                <span className="hidden sm:inline">PELICULAS</span>
              </Link>
            </li>

            <li className="hover:scale-105 transition-transform  hover:text-white hover:duration-800">
              <Link to="/PeliculasVistas">
                {" "}
                <Icon
                  className="h-0 hidden sm:inline"
                  size={50}
                  icon={iosEye}
                />
                <span className="hidden sm:inline">VISTAS</span>
              </Link>
            </li>

            <li className="hover:scale-105 transition-transform  hover:text-white hover:duration-800">
              <Link to="/PeliculasFavoritas">
                <Icon
                  className="h-0 hidden sm:inline"
                  size={36}
                  icon={iosHeart}
                />
                <span className="hidden sm:inline">FAVORITAS</span>
              </Link>
            </li>
<a href=""></a>
            <li
              onClick={handleAlertCerrar}
              className="hover:scale-105 transition-transform  hover:text-white hover:duration-800"
            >
              <Icon className="h-0 hidden sm:inline" size={35} icon={signOut} />
              <span className="hidden md:inline">CERRAR SESION</span>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Nav;
