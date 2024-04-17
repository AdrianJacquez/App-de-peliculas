import "./App.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Formulario from "./Formulario";

//Componente con los elementos del formulario para iniciar sesion
<Formulario />;

//Componente con los elementos del menu de peliculas
const Inicio = () => <h1>Catalogo de peliculas</h1>;

//Componente con los elementos de la page para ver las peliculas ya vistas
const Vistas = () => <h1>Peliculas vistas</h1>;

//Componente con los elementos de la page para ver tus peliculas favoritas
const Favoritas = () => <h1>Peliculas Favoritas</h1>;

function App() {
  return (
    <>
      <nav className="Navegador text-decoration-none w-full h-20 bg-gradient-to-r from-orange-500 to-orange-800  ">
        <ul
          id="Opciones"
          className="p-2 w-full h-full text-2xl flex justify-between items-center"
        >
          <li>
            <NavLink to="/">iniciar sesion</NavLink>
          </li>

          <li>
            <Link to="/Catalogo">Peliculas</Link>
          </li>

          <li>
            <Link to="/PeliculasVistas">Peliculas Vistas</Link>
          </li>

          <li>
            <Link to="/PeliculasFavoritas"> Favoritas </Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Formulario />}></Route>
          <Route path="/Catalogo" element={<Inicio />}></Route>
          <Route path="/PeliculasVistas" element={<Vistas />}></Route>
          <Route path="/PeliculasFavoritas" element={<Favoritas />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
