import { Route, Routes, Navigate } from "react-router-dom";
//import IconContextProvider from "./IconContext.jsx";
import Formulario from "./Formulario.jsx";
import Peliculas from "./Peliculas.jsx";
import Vistas from "./PeliculasVistas.jsx";
import Favoritas from "./PeliculasFavoritas.jsx";
import PeliculaInfo from "./PeliculaInfo.jsx";
import Nav from "./Nav.jsx";

//Componente con los elementos de la page para ver tus peliculas favoritas

function App() {
  return (
    <>
    {/*se renderiza el nav llamandolo */}
      <Nav />

      <div className="App w-full  ">
        {/*Routes es para contener las diferentes Route */}
        <Routes>
          {/*se crean las iferentes route, con referencia a su repecivo elemento*/}
          <Route path="/" element={<Formulario />} />
          <Route path="/Peliculas" element={<Peliculas />} />
          <Route path="/PeliculasVistas" element={<Vistas />} />
          <Route path="/PeliculasFavoritas" element={<Favoritas />} />
          <Route path="/PeliculaInfo" element={<PeliculaInfo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
