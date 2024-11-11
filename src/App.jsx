// src/App.jsx
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NowPlayingCard from './components/NowPlayingCard';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex bg-black text-white h-screen overflow-hidden">
        <Sidebar />
        <MainContent />
        
        <NowPlayingCard />
      </div>
    </DndProvider>
  );
};

export default App;
