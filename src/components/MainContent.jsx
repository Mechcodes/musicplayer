// src/components/MainContent.jsx
import React, { useState } from 'react';
import SongList from './SongList';
import { Music } from '../assets/Music.js';

const MainContent = () => {
  const [songs, setSongs] = useState(Music);
  const [currentSong, setCurrentSong] = useState(null);

  const handleSongSelect = (song) => {
    setCurrentSong(song); // Set the selected song as the current song
  };

  const moveSong = (fromIndex, toIndex) => {
    const updatedSongs = [...songs];
    const [movedSong] = updatedSongs.splice(fromIndex, 1);
    updatedSongs.splice(toIndex, 0, movedSong);
    setSongs(updatedSongs);
  };

  return (
    <main className="flex-1 mb-10 p-5 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <header className="flex justify-between items-center mb-6">
        <div className="space-x-4">
          <button className="px-4 py-2 bg-yellow-500 rounded">Music</button>
          <button className="px-4 py-2 bg-gray-700 rounded">Podcast</button>
          <button className="px-4 py-2 bg-gray-700 rounded">Live</button>
          <button className="px-4 py-2 bg-gray-700 rounded">Radio</button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 px-4 py-2 rounded"
        />
      </header>

      <section className="mb-6 relative">
        <div className="relative h-64">
          <img
            src="https://www.thomann.de/blog/wp-content/uploads/2024/10/singerheader.jpg"
            alt="Artist"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Position Popular and See All text on opposite sides */}
          <div className="absolute top-4 left-4 font-bold text-3xl">Popular</div>
          <div className="absolute top-4 right-4 font-bold text-3xl">See All</div>
        </div>
      </section>

      <section className="overflow-y-scroll h-96">
        <div className="flex flex-col space-y-4">
          <SongList
            songs={songs}
            currentSong={currentSong}
            onSongSelect={handleSongSelect}
            moveSong={moveSong}
          />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
