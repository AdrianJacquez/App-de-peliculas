import "./App.css";
import { Route, Routes } from "react-router-dom";

const Formulario = () => <h1>Inicio de sesion</h1>;

const Inicio = () => <h1>Menu de peliculas</h1>;

function App() {
  return (
    <>
      Hola
      <div className="App">
        Hola
        <Routes>
          <Route path="/" element={<Formulario />}></Route>
          <Route path="/Menu" element={<Inicio />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
