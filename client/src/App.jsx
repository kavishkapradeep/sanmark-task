import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoadPage from './pages/LoadPage';
import Process from './pages/Process';
import TunelDetails from './components/TunelDetails'
import Details from './components/Details'
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
     <div className=' w-full h-screen bg-gradient-to-l from-gray-500 to-gray-950'>
     <Toaster/>
        <Routes>
           <Route path='/' element={<Homepage/>}></Route>
            <Route path='/load' element = {<LoadPage/>}/>
            <Route path='/process' element={<Process/>}>
               <Route path='tunel-details' element={<TunelDetails/>}></Route>
               <Route path='details' element={<Details/>}/>
               </Route>
        </Routes>
     </div>
  );
}

export default App;

