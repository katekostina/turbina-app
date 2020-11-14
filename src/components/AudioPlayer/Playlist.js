import React from "react";

function Playlist({ songs, changeCurSong }) {
  return (
    <ul className="playlist">
      {songs.map((song) => (
        <li className="playlist__row" key={song.id} onClick={ () => changeCurSong(song) }>
          {song.title && (
              <span className="playlist__title">{song.title} &mdash; </span>
          )}
          {song.musician && (
              <span className="playlist__title">{song.musician}</span>
          )}
          <span className="playlist__feat"> feat. </span>
          {song.poet && (
              <span className="playlist__title">{song.poet}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Playlist;
