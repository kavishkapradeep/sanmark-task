import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Process = () => {
  return (
    <div className=' flex   '>
       <div className=' w-60 h-screen bg-gray-600 border-r-2 flex flex-col gap-7'>
            <NavLink to={'/process/tunel-details'} className=' text-lg mt-7 font-bold text-white p-2'>Tunel Details</NavLink>
            <NavLink to={'/process/details'} className=' text-lg mt-7 font-bold text-white p-2'>Previous Details</NavLink>
       </div>
       <Outlet/>
    </div>
  );
}

export default Process;
