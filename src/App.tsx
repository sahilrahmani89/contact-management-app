import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App: React.FC = () => {

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className={`flex-1 min-h-screen bg-gray-100 transition-all duration-200 ease-in-out `}>
          <div className="p-4 mt-[80px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
