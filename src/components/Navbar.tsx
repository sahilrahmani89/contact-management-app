import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar,setPageName } from '../feature/navbar/navSlice';
import menu from '../assets/icons/menus.png'
import { useLocation } from 'react-router-dom';
import { RootState } from '../store/store';


const Navbar = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const { page } = useSelector((state: RootState) => state.navbar);

  useEffect(()=>{
    if (location.pathname === '/') {
      dispatch(setPageName('CONTACT'));
    } else  {
      dispatch(setPageName(location.pathname.substring(1).toUpperCase()));
    }
  },[location,page]) // this function used to update page state on the basis of its route 
  return (
    <nav style={{zIndex:999}} className="bg-gray-800 text-white h-16 flex items-center justify-between px-4 w-full fixed top-0 ">
      <img onClick={()=>dispatch(toggleNavbar())} src={menu} alt='menu' className="text-white h-6 w-6 cursor-pointer">
     
      </img>
      <div className="text-center flex-1">
        <h1 className="text-sm font-bold">{page}</h1>
      </div>
      
    </nav>
  );
};

export default Navbar;
