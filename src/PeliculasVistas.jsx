function Vistas() {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-900 ">
        <h1 className="text-white text-6xl m-6 hover:text-orange-500 ">
          {" "}
          Peliculas vistas
        </h1>
        <div className="card-container flex flex-wrap justify-center h-auto mt-6 gap-4"></div>
      </div>
    </>
  );
}

export default Vistas;
