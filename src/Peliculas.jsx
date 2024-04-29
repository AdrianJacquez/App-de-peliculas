import { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { iosHeartOutline } from "react-icons-kit/ionicons/iosHeartOutline";
import { iosHeart } from "react-icons-kit/ionicons/iosHeart";
import { iosEyeOutline } from "react-icons-kit/ionicons/iosEyeOutline";
import { iosEye } from "react-icons-kit/ionicons/iosEye";
import { useNavigate } from "react-router-dom";

const Peliculas = () => {
  const [peliculasAll, setPeliculasAll] = useState([]);
  const apiKey = "dd9105c17c9280fefc93cf84ed8094c8"; // Puedes cambiar esto a 'week' o 'month' según tus necesidades
  const [trigger, setTrigger] = useState(1);
  const [triggerVista, setTriggerVista] = useState(1);
  const navigate = useNavigate();

  let storeCardInfo = JSON.parse(localStorage.getItem("cartaInfo")) || [];

  const storeCardsFavoritas =
    JSON.parse(localStorage.getItem("cartasFavoritas")) || [];

  const storeCardsVistas =
    JSON.parse(localStorage.getItem("cartasVistas")) || [];

  useEffect(() => {
    // Define la URL para la solicitud GET
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    // Realiza la solicitud GET utilizando Axios
    axios
      .get(url)
      .then((response) => {
        setPeliculasAll(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error("Error al realizar la solicitud:", error);
      });
  }, []);

  const handleInfo = (id) => {
    storeCardInfo = [];
    storeCardInfo.push(id);
    console.log(storeCardInfo);
    localStorage.setItem("cartaInfo", JSON.stringify(storeCardInfo));
    navigate("/PeliculaInfo");
  };

  const handleVista = (id) => {
    const index = storeCardsVistas.indexOf(id);

    if (index === -1) {
      // Si no está, lo agregamos al array utilizando el método setcartasFavoritas
      storeCardsVistas.push(id);
      setTriggerVista(triggerVista + 1);
    } else {
      storeCardsVistas.splice(index, 1);
      setTriggerVista(triggerVista + 1);
      console.log(triggerVista);
    }
    localStorage.setItem("cartasVistas", JSON.stringify(storeCardsVistas));
  };

  const handleFavorita = (id) => {
    const index = storeCardsFavoritas.indexOf(id);

    if (index === -1) {
      // Si no está, lo agregamos al array utilizando el método setcartasFavoritas
      storeCardsFavoritas.push(id);
      setTrigger(trigger + 1);
    } else {
      storeCardsFavoritas.splice(index, 1);
      setTrigger(trigger + 1);
      console.log(trigger);
    }
    localStorage.setItem(
      "cartasFavoritas",
      JSON.stringify(storeCardsFavoritas)
    );
  };

  useEffect(() => {
    console.log("Array de cartas favoritas:", storeCardsFavoritas);
  }, [trigger]);

  useEffect(() => {
    console.log("Array de cartas vistas:", storeCardsVistas);
  }, [triggerVista]);

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
      <div className="flex flex-col items-center bg-gray-900 w-full ">
        <h1 className="text-white text-center text-6xl m-6 hover:text-orange-500 ">
          Catalogo de peliculas
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
              <p>{formatFecha(item.release_date || item.name)}</p>
              <div className=" w-full flex justify-around">
                <button
                  className="hover:scale-125 hover:transition-transform hover:duration-300 "
                  onClick={() => handleVista(item.id)}
                >
                  {storeCardsVistas.includes(item.id) ? (
                    <Icon size={70} icon={iosEye} />
                  ) : (
                    <Icon size={70} icon={iosEyeOutline} />
                  )}
                </button>

                <button
                  className="hover:scale-125 hover:transition-transform hover:duration-300 "
                  onClick={() => handleFavorita(item.id)}
                >
                  {storeCardsFavoritas.includes(item.id) ? (
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
