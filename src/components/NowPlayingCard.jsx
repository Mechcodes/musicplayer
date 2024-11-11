// src/components/NowPlayingCard.jsx
import React, { useEffect, useState } from 'react';
import { Howl } from 'howler';

const NowPlayingCard = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sound) sound.unload(); // Stop the previous sound if any
    if (currentSong) {
      const newSound = new Howl({
        src: [currentSong.src],
        onplay: () => {
          setIsPlaying(true);
          requestAnimationFrame(updateProgress);
        },
      });
      setSound(newSound);
      newSound.play();
    }
  }, [currentSong]);

  const updateProgress = () => {
    if (sound && sound.playing()) {
      setProgress((sound.seek() / sound.duration()) * 100);
      requestAnimationFrame(updateProgress);
    }
  };

  const togglePlayPause = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkipBackward = () => {
    // Implement skipping to the previous song
  };

  const handleSkipForward = () => {
    // Implement skipping to the next song
  };

  return (
    <aside className="w-1/6 h-fit bg-red-700 text-white p-5 rounded-lg ">
      <h3 className="text-lg font-bold mb-4 text-center">Now Playing</h3>
      
      <div className="mb-4">
        <img 
          src="https://www.thomann.de/blog/wp-content/uploads/2024/10/singerheader.jpg" 
          alt="Album Art" 
          className="rounded-lg mb-4 w-full h-32 object-cover"
        />
        <h4 className="text-xl font-semibold text-center truncate">{currentSong ? currentSong.title : 'No song selected'}</h4>
        <p className="text-center text-gray-300 truncate">{currentSong ? currentSong.artist : ''}</p>
      </div>
      
      <div className="flex justify-between items-center mt-4 text-gray-300 text-sm">
        <span>{formatTime(sound ? sound.seek() : 0)}</span>
        <span>{formatTime(currentSong ? sound.duration() : 0)}</span>
      </div>

      <div className="relative h-1 bg-gray-400 rounded-full mt-1 mb-5">
        <div
          className="absolute top-0 left-0 h-1 bg-white rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-center items-center space-x-6 text-2xl">
        <button onClick={handleSkipBackward}>⏮️</button>
        <button onClick={togglePlayPause}>
          {isPlaying ? '⏸' : '▶️'}
        </button>
        <button onClick={handleSkipForward}>⏭️</button>
      </div>
    </aside>
  );
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

export default NowPlayingCard;
