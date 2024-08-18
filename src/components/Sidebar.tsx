import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import dashboardIcon from '../assets/icons/dashboard.png';
import contactIcon from '../assets/icons/contact.png';

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.navbar.isNav);
// responsive navbar on the basis of boolean of isOpen
  return (
    <>
      <div
        className={`
          fixed inset-y-0 left-0 transform transition-all duration-300 ease-in-out  
          bg-gray-200 z-40 mt-[63px]
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0 md:w-48 
          ${!isOpen ? 'md:block' : 'md:hidden'}
        `}
      >
        <nav>
          <ul className="flex flex-col my-4 p-2">
            <li className="flex items-center my-2">
              <Link to="/" className="flex items-center">
                <img src={contactIcon} alt="Contact Icon" className="h-5 w-5 mr-2" />
                <span>Contact</span>
              </Link>
            </li>
            <li className="flex items-center my-2">
              <Link to="/dashboard" className="flex items-center">
                <img src={dashboardIcon} alt="Dashboard Icon" className="h-5 w-5 mr-2" />
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
