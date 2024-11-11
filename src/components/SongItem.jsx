// src/components/SongItem.jsx
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const SongItem = ({ song, index, isPlaying, onSongSelect, moveSong }) => {
  const [, ref] = useDrag({
    type: 'SONG',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'SONG',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveSong(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className={`flex justify-between p-2 cursor-pointer ${
        isPlaying ? 'bg-red-600 text-white' : 'hover:bg-gray-800'
      }`}
      onClick={() => onSongSelect(song)}
    >
      <span>{index + 1}</span>
      <span>{song.title}</span>
      <span>{song.artist}</span>
      <span>{song.time}</span>
    </div>
  );
};

export default SongItem;
