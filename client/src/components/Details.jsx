import React, { useContext, useEffect } from 'react';
import tunelContext from '../context/TunelContext';

const Details = () => {
  const {tableData,handleData} =useContext(tunelContext)
  useEffect(()=>{
    handleData()
  },[])
  return (
    <div className=' flex w-full h-screen justify-center items-center '>
        <table className=' border flex flex-col p-3 rounded-2xl bg-gray-800/50 '>
            <thead className=' border-b text-2xl font-bold text-white p-1'>
                <tr className=' flex gap-3'>
                    <td className=' flex w-full '>index</td>
                    <td className=' flex w-full '>Date</td>
                    <td className=' flex w-full '>Time</td>
                    <td className=' flex w-full '>Load Mass</td>
                    <td className=' flex w-full '>Unload Mass</td>
                </tr>
            </thead>
            <tbody>
                {tableData.reverse().map((data,i)=>(
                   <tr key={i} className=' flex gap-3 text-gray-400 text-xl py-1 border-b border-gray-400'>
                      <td className=' flex w-full items-center justify-center '>{i+1}</td>
                    <td className=' flex w-full justify-center'>{data.date}</td>
                    <td className=' flex w-full '>{data.time}</td>
                    <td className=' flex w-full '>{data.load}</td>
                    <td className=' flex w-full '>{data.unload}</td>
                   </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Details;
