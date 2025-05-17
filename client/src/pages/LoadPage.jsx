import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import tunelContext from '../context/TunelContext';
import axios from 'axios'
import toast from 'react-hot-toast';

const LoadPage = () => {
      const navigate = useNavigate()

      const {date,setDate,time ,setTime,load ,setLoad,unLoad,setUnLoad ,backendUrl} =useContext(tunelContext)
   
  const loadAddData = async (e) => {
    e.preventDefault()
    try {
          

        const {data} = await axios.post(backendUrl+'/api/auth/add',{
            load,date,time,unload:unLoad
        })
        if (data.success) {
            toast.success("data added success fully")
            navigate('/process')
        }else{
            toast.error("data not added")
        }
    } catch (error) {
        
    }
  } 
  return (
    <div className=' w-full h-screen flex justify-center items-center'>
        <div className='p-2 flex-col items-center bg-indigo-950 w-3/4  flex '>
            <h1 className=' text-2xl text-white'>Loading and Unloading</h1>
            <div>
                <div className=' flex mt-5 text-white gap-3'>
                    <p className=' text-2xl'>Date & Time :</p>
                    <input onChange={(e)=>setDate(e.target.value)} value={date} className='  p-2 border-2' type="date" name="" id="" />
                    <input onChange={(e)=>setTime(e.target.value)} value={time}  className='  p-2 border-2 ml-3' type="time" />
                </div>
                <div className=' flex mt-5 text-white gap-1 '>
                    <p className=' text-lg'>Load :</p>
                    <input className='  p-1 text-lg border-2 w-5/6' onChange={(e)=>setLoad(e.target.value)} value={load}  type="Number" name="" id="" />
                    <p>KG</p>
                </div>
                <div className=' flex mt-5 text-white gap-1 '>
                    <p className=' text-lg'>Unload :</p>
                    <input onChange={(e)=>setUnLoad(e.target.value)} value={unLoad} className='  p-1 text-lg border-2 w-5/6' type="Number" name="" id="" />
                    
                </div>
            </div>
             <button onClick={loadAddData} className=' text-2xl p-1.5 border-2 mt-4 px-3 bg-blue-400 rounded-2xl'>SUBMIT</button>
       
            
        </div>
       
    </div>
  );
}

export default LoadPage;
