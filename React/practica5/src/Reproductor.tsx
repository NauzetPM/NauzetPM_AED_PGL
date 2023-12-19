import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Reproductor = () => {
  const [playlist, setPlaylist] = useState([
    { title: 'Canción 1', source: 'http://allzic06.ice.infomaniak.ch/allzic06' },
    { title: 'Canción 2', source: "<https://www.youtube.com/watch?v=dQw4w9WgXcQ>" },
    { title: 'Radio 1', source: 'https://emisorasderadioonline.es/los-40-classic-en-directo/' },
  ]);

  const [currentSong, setCurrentSong] = useState<string>("");

  const playSong = (source: string) => {
    setCurrentSong(source);
  };

  return (
    <div>
      <h2>Reproductor de Audio</h2>
      <div>
        <h3>Lista de Reproducción</h3>
        <ul>
          {playlist.map((item, index) => (
            <li key={index}>
              <button onClick={() => playSong(item.source)}>{item.title}</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Reproductor</h3>
        <ReactPlayer
          url={currentSong}
          controls
          width="400px"
          height="200px"
        />
      </div>
    </div>
  );
};

export default Reproductor;
