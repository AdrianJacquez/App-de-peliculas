import { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { eyeMinus } from "react-icons-kit/icomoon/eyeMinus";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Vistas() {
  const [peliculasAll, setPeliculasAll] = useState([]);
  const apiKey = "dd9105c17c9280fefc93cf84ed8094c8";
  const [triggerVista, setTriggerVista] = useState(1);
  const navigate = useNavigate();
  let storeCardInfo = JSON.parse(localStorage.getItem("cartaInfo")) || [];

  const storeCardsVistas =
    JSON.parse(localStorage.getItem("cartasVistas")) || [];
  console.log(storeCardsVistas);

  useEffect(() => {
    // Define la URL para la solicitud GET
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    // Realiza la solicitud GET utilizando Axios
    axios
      .get(url)
      .then((response) => {
        const peliculasVistas = response.data.results.filter((item) =>
          storeCardsVistas.includes(item.id)
        );
        setPeliculasAll(peliculasVistas);
        console.log(storeCardsVistas);
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error("Error al realizar la solicitud:", error);
      });
  }, [triggerVista]);

  const handleInfo = (id) => {
    storeCardInfo = [];
    storeCardInfo.push(id);
    console.log(storeCardInfo);
    localStorage.setItem("cartaInfo", JSON.stringify(storeCardInfo));
    navigate("/PeliculaInfo");
  };

  const handleDelete = (id) => {
    const index = storeCardsVistas.indexOf(id);

    storeCardsVistas.splice(index, 1);
    setTriggerVista(triggerVista + 1);
    console.log(triggerVista);

    localStorage.setItem("cartasVistas", JSON.stringify(storeCardsVistas));
  };

  return (
    <>
      {" "}
      <div className="flex flex-col items-center bg-gray-900 w-full ">
        <h1 className="text-white text-center text-6xl m-6 hover:text-orange-500 ">
          Peliculas Vistas
        </h1>

        <div className="card-container flex flex-wrap justify-center h-auto mt-6 gap-4">
          {peliculasAll.map((item) => (
            <div
              key={item.id}
              className="card relative rounded-md bg-orange-500 w-[210px] h-auto pt-4 flex flex-col 
              justify-between items-center hover:scale-95 transition-transform hover:bg-orange-600"
            >
              <div
                onClick={() => {
                  handleInfo(item.id);
                }}
                className="container-mx-auto w-5/6 overflow-hidden "
              >
                {" "}
                <img
                  className="max-w-full h-auto rounded-xl hover:hover:scale-125 transition-transform hover:duration-300 hover:rounded-xl"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title || item.name}
                />
              </div>
              <h1 className="text-lg m-2">{item.title || item.name}</h1>
              <div className="m-3">
                <button
                  className="hover:scale-110 hover:transition-transform hover:duration-300 "
                  onClick={() => handleDelete(item.id)}
                >
                  <Icon
                    className="hover:text-white"
                    size={60}
                    icon={eyeMinus}
                  ></Icon>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Vistas;
