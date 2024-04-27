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
      <div className="w-full">
        {peliculasAll.map((item) => (
          <div
            key={item.id}
            className="card relative rounded-md bg-orange-500 w-[1000px] h-auto p-4 m-6 flex flex-row 
              justify-between "
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
            <div className="container-mx-auto w-5/6 m-5  ">
              {" "}
              <img
                className="max-w-full h-auto rounded-xl hover:hover:scale-95 transition-transform hover:duration-300 "
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
              />
            </div>
            <div className="w-[600px] h-full m-5">
              <h1 className="text-5xl m-2">{item.title}</h1>
              <p className="text-xl"> DESCRIPCION: {item.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PeliculaInfo;
