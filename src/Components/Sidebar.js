import React from 'react';
import { LogOut } from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const navItems = [
    { name: 'Dashboard', icon: <span className="w-5">🏠</span> },
    { name: 'Transactions', icon: <span className="w-5">💸</span> },
    { name: 'Budgets', icon: <span className="w-5">📊</span> },
    { name: 'Calendar', icon: <span className="w-5">📅</span> },
    { name: 'Reports', icon: <span className="w-5">📈</span> },
    { name: 'Settings', icon: <span className="w-5">⚙️</span> },
  ];

  return (
    <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transform transition-transform duration-300 ease-in-out z-10 md:translate-x-0`}>
      <div className="p-4 h-16 flex items-center border-b border-gray-700">
        <span className="text-xl font-bold">FinTrack Dashboard</span>
      </div>
      <nav className="mt-8">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#" className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 ${index === 0 ? 'bg-gray-700 text-white' : ''}`}>
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
        <a href="#" className="flex items-center text-gray-300 hover:text-white">
          <LogOut size={20} />
          <span className="ml-3">Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;