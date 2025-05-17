import React, { useState } from 'react';
import { Bell, Settings, Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ user, theme, toggleTheme, toggleSidebar, sidebarOpen }) => {
  
  return (
    <header className="bg-red shadow">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-full hover:bg-gray-100 md:hidden"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="ml-2 text-xl font-bold">FinTrack</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={18} />
          </button>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100"
          >
            {theme === 'dark' ? <Sun color="white" size={20} /> : <Moon color="black" size={20} />}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={18} />
          </button>
          <div className="flex items-center ml-4">
            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
            <span className="ml-2 hidden md:inline">{user.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;