import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = () => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemones(response?.data?.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      {pokemones.length &&
        pokemones.map((poke) => {
          return <div>{poke.name}</div>;
        })}
    </div>
  );
};

export default Pokemon;
