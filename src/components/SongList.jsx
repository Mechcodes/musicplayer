// src/components/SongList.jsx
import React from 'react';
import SongItem from './SongItem';

const SongList = ({ songs, currentSong, onSongSelect, moveSong }) => {
  return (
    <div>
      {songs.map((song, index) => (
        <SongItem
          key={song.id}
          index={index}
          song={song}
          isPlaying={currentSong && currentSong.id === song.id}
          onSongSelect={onSongSelect}
          moveSong={moveSong}
        />
      ))}
    </div>
  );
};

export default SongList;
