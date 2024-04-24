import { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { iosHeartOutline } from "react-icons-kit/ionicons/iosHeartOutline";
import { iosHeart } from "react-icons-kit/ionicons/iosHeart";
import { iosEyeOutline } from "react-icons-kit/ionicons/iosEyeOutline";
import { iosEye } from "react-icons-kit/ionicons/iosEye";

const Peliculas = () => {
  //const context = useContext(CardStateContext);

  const [peliculasAll, setPeliculasAll] = useState([]);
  const apiKey = "dd9105c17c9280fefc93cf84ed8094c8"; // Puedes cambiar esto a 'week' o 'month' según tus necesidades
  const [favorito, setFavorito] = useState([]);
  const [vista, setVista] = useState([]);

  useEffect(() => {
    // Define la URL para la solicitud GET
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    // Realiza la solicitud GET utilizando Axios
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setPeliculasAll(response.data.results);
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error("Error al realizar la solicitud:", error);
      });
  }, []);

  const handleFavoriteToggle = (index) => {
    // Copiar el array de estados de favoritos
    const newFavoritos = [...favorito];
    // Cambiar el estado de favorito para la película en el índice dado
    newFavoritos[index] = !newFavoritos[index];
    // Actualizar el estado de favoritos
    setFavorito(newFavoritos);
  };

  const handleVistaToggle = (index) => {
    // Copiar el array de estados de favoritos
    const newVistas = [...vista];
    // Cambiar el estado de favorito para la película en el índice dado
    newVistas[index] = !newVistas[index];
    // Actualizar el estado de favoritos
    setVista(newVistas);
    console.log(index);
  };

  const meses = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  function formatFecha(fecha) {
    const [year, month, day] = fecha.split("-");
    return `${parseInt(day)} ${meses[parseInt(month) - 1]} ${year}`;
  }

  return (
    <>
      {" "}
      <div className="flex flex-col items-center bg-gray-900  ">
        <h1 className="text-white text-6xl m-6 hover:text-orange-500 ">
          Catalogo de peliculas
        </h1>

        <div className="card-container flex flex-wrap justify-center h-auto mt-6 gap-4">
          {peliculasAll.map((item, index) => (
            <div
              key={item.id}
              className="card relative rounded-md bg-orange-500 w-[210px] h-auto pt-4 flex flex-col 
              justify-between items-center hover:scale-95 transition-transform hover:bg-orange-600"
            >
              <div className="container-mx-auto w-5/6 overflow-hidden ">
                {" "}
                <img
                  className="max-w-full h-auto rounded-xl hover:hover:scale-125 transition-transform hover:duration-300 hover:rounded-xl"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title || item.name}
                />
              </div>

              <h1 className="text-lg m-2">{item.title || item.name}</h1>
              <p>{formatFecha(item.release_date || item.name)}</p>
              <div className=" w-full flex justify-around">
                <button onClick={() => handleVistaToggle(index)}>
                  {vista[index] ? (
                    <Icon size={70} icon={iosEye} />
                  ) : (
                    <Icon size={70} icon={iosEyeOutline} />
                  )}
                </button>

                <button onClick={() => handleFavoriteToggle(index)}>
                  {favorito[index] ? (
                    <Icon size={50} icon={iosHeart} />
                  ) : (
                    <Icon size={50} icon={iosHeartOutline} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Peliculas;
