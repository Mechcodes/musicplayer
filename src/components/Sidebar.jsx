// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-black text-white w-1/5 h-screen p-5 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-6">DreamMusic</h1>
        <nav>
          <ul className="space-y-4">
            <li>Home</li>
            <li>Trends</li>
            <li>Library</li>
            <li>Discover</li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className="space-y-4">
          <li>Settings</li>
          <li>Log Out</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
