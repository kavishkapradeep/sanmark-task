import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import tunelContext from '../context/TunelContext';

const Homepage = () => {
    const navigate = useNavigate()
    const {
radiusA,setRadiusA,radiusb,setRadiusb,radiusc,setRadiusc,heightA,setHeightA,heightB,setHeightB,heightC,setHeightC} = useContext(tunelContext)
   
    const HandeleLoad = (e)=>{
        try {
            e.preventDefault()
            navigate('/load')
            console.log(radiusA+" "+ radiusb +" "+ radiusc);
            console.log(heightA+" "+ heightB +" "+ heightC);
            
            
        } catch (error) {
            
        }
    }
  return (
    <div className=' w-full h-screen '>
        <div className=' w-full h-screen flex justify-center
         items-center'>
             <div className=' w-3/4  bg-blue-900/30 p-4 rounded-2xl border border-white flex flex-col  '>
                    <h1 className=' text-3xl text-whie font-bold text-white flex  justify-center w-full'>Start your Process</h1>

                    <div className=' m-1.5 mt-5 flex border-2  p-1 flex-col justify-center w-full items-center'>
                                <h1 className=' text-3xl text-white font-bold'>Settings</h1>
                                <div className=' flex mt-4 '>
                                     <p className=' text-xl font-semibold text-white pr-3'>Radius</p>
                                     <div className=' flex flex-col'>
                                        <div className=' flex'>
                                        <p className=' text-lg font-bold text-blue-400'>A :</p>
                                        <input onChange={(e)=>setRadiusA(e.target.value)} value={radiusA} className=' text-blue-300 p-1 text-lg outline-none border pl-2 ml-2 w-72' type="Number" placeholder=' Enter do you want radius' />
                                     </div>
                                     <div className=' flex'>
                                        <p className=' text-lg font-bold text-blue-400'>B :</p>
                                        <input onChange={(e)=>setRadiusb(e.target.value)} value={radiusb} className='text-blue-300 p-1 text-lg outline-none border pl-2 ml-2 w-72 mt-3' type="Number" placeholder=' Enter do you want radius' />
                                     </div>
                                     <div className=' flex'>
                                        <p className=' text-lg font-bold text-blue-400'>C :</p>
                                        <input onChange={(e)=>setRadiusc(e.target.value)} value={radiusc} className='text-blue-300 p-1 text-lg outline-none border pl-2 ml-2 w-72 mt-3' type="Number" placeholder=' Enter do you want radius' />
                                     </div>
                                     </div>
                                </div>
                                 <div className=' flex '>
                                     <p className=' text-xl mr-2 text-white font-bold' >Height</p>
                                     <div className=' flex flex-col'>
                                        <div className=' flex mt-2'>
                                        <p className=' text-lg font-bold  text-blue-400'>A :</p>
                                        <input onChange={(e)=>setHeightA(e.target.value)} value={heightA} className='text-blue-300 p-1 text-lg outline-none border pl-2 ml-2 w-72 mt-3' type="Number" placeholder=' Enter do you want radius' />
                                     </div>
                                     <div className=' flex'>
                                        <p className=' text-lg font-bold text-blue-400'>B :</p>
                                        <input onChange={(e)=>setHeightB(e.target.value)} value={heightB} className='text-blue-300 p-1 text-lg outline-none border pl-2 ml-2 w-72 mt-3' type="Number" placeholder=' Enter do you want radius' />
                                     </div>
                                     <div className=' flex'>
                                        <p className=' text-lg font-bold text-blue-400'>C :</p>
                                        <input onChange={(e)=>setHeightC(e.target.value)} value={heightC} className='text-blue-300 p-1 text-lg outline-none border pl-2 ml-2 w-72 mt-3' type="Number" placeholder=' Enter do you want radius' />
                                     </div>
                                     </div>
                                </div>
                                <button onClick={HandeleLoad} className=' text-xl p-2 px-3 mb-3  bg-blue-600 hover:bg-blue-100 rounded-2xl border-2 mt-7 cursor-pointer'>Submit</button>
                    </div>
             </div>
        </div>
    </div>
  );
}

export default Homepage;
