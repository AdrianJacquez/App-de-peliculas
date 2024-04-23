import { Route, Routes, Navigate } from "react-router-dom";
import Formulario from "./Formulario.jsx";
import Peliculas from "./Peliculas.jsx";
import Vistas from "./PeliculasVistas.jsx";
import Nav from "./Nav.jsx";

//Componente con los elementos de la page para ver tus peliculas favoritas
const Favoritas = () => <h1>Peliculas Favoritas</h1>;

function App() {
  return (
    <>
      <Nav />

      <div className="App">
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/Peliculas" element={<Peliculas />} />
          <Route path="/PeliculasVistas" element={<Vistas />} />
          <Route path="/PeliculasFavoritas" element={<Favoritas />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
