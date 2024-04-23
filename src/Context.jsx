import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

const CardStateContext = createContext();

export const CardStateProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);
  const [vista, setVista] = useState([]);

  return (
    <CardStateContext.Provider
      value={{ favorito, setFavorito, vista, setVista }}
    >
      {children}
    </CardStateContext.Provider>
  );
};

// Agrega validación para children
CardStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardStateContext;
