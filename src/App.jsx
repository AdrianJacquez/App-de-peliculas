import { Route, Routes, Link, useLocation } from "react-router-dom";
import Formulario from "./Formulario.jsx";
import Peliculas from "./Peliculas.jsx";
import { clapperboard } from "react-icons-kit/entypo/clapperboard";
import { iosEye } from "react-icons-kit/ionicons/iosEye";
import { iosHeart } from "react-icons-kit/ionicons/iosHeart";
import Icon from "react-icons-kit";
import { DataProvider } from "./DataContext.js";

//Componente con los elementos de la page para ver las peliculas ya vistas
const Vistas = () => <h1>Peliculas vistas</h1>;

//Componente con los elementos de la page para ver tus peliculas favoritas
const Favoritas = () => <h1>Peliculas Favoritas</h1>;

function App() {
  const location = useLocation();

  return (
    <>
      {/* Mostrar el nav solo si la ruta no es "/" */}
      {location.pathname !== "/" && (
        <nav className="Navegador text-decoration-none w-full h-[60px] bg-orange-500 ">
          <ul
            id="Opciones"
            className="p-6 w-full h-full text-2xl flex justify-between items-center"
          >
            <li className=" flex  hover:scale-105 transition-transform  hover:text-white hover:duration-800">
              <Link to="/Peliculas">
                {" "}
                <Icon className="h-0" size={40} icon={clapperboard} /> PELICULAS
              </Link>
            </li>

            <li className="hover:scale-105 transition-transform  hover:text-white hover:duration-800">
              <Link to="/PeliculasVistas">
                {" "}
                <Icon className="h-0" size={60} icon={iosEye} /> PELICULAS
                VISTAS
              </Link>
            </li>

            <li className="hover:scale-105 transition-transform  hover:text-white hover:duration-800">
              <Link to="/PeliculasFavoritas">
                <Icon className="h-0" size={48} icon={iosHeart} /> FAVORITAS{" "}
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <div className="App">
        <DataProvider>
          <Routes>
            <Route path="/" element={<Formulario />} />
            <Route path="/Peliculas" element={<Peliculas />} />
            <Route path="/PeliculasVistas" element={<Vistas />} />
            <Route path="/PeliculasFavoritas" element={<Favoritas />} />
          </Routes>
        </DataProvider>
      </div>
    </>
  );
}

export default App;
