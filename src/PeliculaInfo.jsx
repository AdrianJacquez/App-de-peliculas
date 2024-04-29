import { useEffect, useState } from "react";
import axios from "axios";
import { undo2 } from "react-icons-kit/icomoon/undo2";
import Icon from "react-icons-kit";
import { useNavigate } from "react-router-dom";

const PeliculaInfo = () => {
  const [peliculasAll, setPeliculasAll] = useState([]);
  const apiKey = "dd9105c17c9280fefc93cf84ed8094c8";
  const navigate = useNavigate();
  const storeCardInfo = JSON.parse(localStorage.getItem("cartaInfo")) || [];
  console.log(storeCardInfo);
  useEffect(() => {
    // Define la URL para la solicitud GET
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    // Realiza la solicitud GET utilizando Axios
    axios
      .get(url)
      .then((response) => {
        const PeliculaInfo = response.data.results.filter((item) =>
          storeCardInfo.includes(item.id)
        );
        console.log(response.data.results);
        setPeliculasAll(PeliculaInfo);
        console.log(storeCardInfo);
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error("Error al realizar la solicitud:", error);
      });
  }, []);

  const handleVolver = () => {
    navigate("/Peliculas");
  };

  return (
    <>
      <div className="w-full h-full bg-gray-900 ">
        {peliculasAll.map((item) => (
          <div
            key={item.id}
            className="card flex flex-col rounded-md bg-orange-500 w-auto h-auto p-2 m-6 mb-0 items-center  
               lg:flex lg:flex-row lg:items-start"
          >
            <div>
              <button
                onClick={handleVolver}
                className="hover:text-white hover:scale-105 transition-transform hover:duration-300"
              >
                {" "}
                <Icon size={32} icon={undo2}></Icon> Volver
              </button>
            </div>
            <div className="container-mx-auto w-auto  m-5  ">
              {" "}
              <img
                className="w-auto h-auto rounded-xl hover:hover:scale-95 transition-transform hover:duration-300 md:h-full "
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
            </div>
            <div className="w-auto h-auto m-5 md:w-full">
              <h1 className="text-5xl m-2 bg-gray-900 text-orange-600 p-2 rounded-2xl">
                {item.title}
              </h1>
              <p className="text-xl bg-gray-900 text-orange-600 p-2 rounded-2xl  m-2">
                {" "}
                DESCRIPCION: {item.overview}
              </p>
              <p className="text-xl bg-gray-900 text-orange-600 p-2 rounded-2xl m-2">
                {" "}
                VISTAS: {item.popularity}
              </p>
              <p className="text-xl bg-gray-900 text-orange-600 p-2 rounded-2xl m-2">
                {" "}
                FAVORITOS: {item.vote_average}
              </p>
              <p className="text-xl bg-gray-900 text-orange-600 p-2 rounded-2xl m-2">
                {" "}
                FECHA DE ESTRENO: {item.release_date}
              </p>
              <p className="text-xl bg-gray-900 text-orange-600 p-2 rounded-2xl m-2">
                {" "}
                LENGUAGE ORIGINAL: {item.original_language}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PeliculaInfo;
