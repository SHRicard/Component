import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
const VideoJuegos = () => {
  const [videoJuegos, setVideoJuegos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(
          "https://api.rawg.io/api/games?key=6673aa57d03f43ff9154cf565882f8a8"
        );

        setVideoJuegos(resp?.data?.results);
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      {videoJuegos &&
        videoJuegos.map((juego) => {
          return <Card props={juego} />;
        })}
    </div>
  );
};

export default VideoJuegos;
