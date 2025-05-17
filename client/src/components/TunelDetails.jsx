import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tunelContext from '../context/TunelContext';
import toast from 'react-hot-toast';

const TunelDetails = () => {
     const navigate = useNavigate()
     const {calculateVolume,volumeA,volumeB,volumeC,calculateVolumeB,calculateVolumC,load,unLoad,massOfA,massOfB,massOfC,
        radiusA,radiusb,radiusc,heightA,heightB,heightC
     } = useContext(tunelContext)
     const [fillA,setFillA] = useState(null)
     const [fillB,setFillB] =useState(null)
     const [fillC,setFillC] = useState(null)
     const [ufillA,setuFillA] = useState(null)
     const [ufillB,setuFillB] =useState(null)
     const [ufillC,setuFillC] = useState(null)

     const [remainLoad,setRemainLoad] =useState(null)
     const [remainULoad,setRemainULoad] =useState(null)
    const HandeleLoad = (e)=>{
        try {
            console.log("Volume of A:"+volumeA);
            console.log("Volume of B:"+volumeB);
            console.log("Volume of C:"+volumeC);
            
            e.preventDefault()
            navigate('/load')
        } catch (error) {
            
        }
    }
    
    const handleLoad = ()=>{
      let remaining = Number(load)
      try {
        let fillA =0
        let fillB=0
        let fillC =0

        if ( massOfA < remaining ) {
            fillA = massOfA;
            remaining-=massOfA
            alert("A filled ")
            alert("remaining Rice :"+remaining)
             
        }else{
            fillA = remaining;
            
            alert("A filled")
            alert("remaining Rice :"+remaining)
            remaining =0
        }
        if ( massOfB < remaining ) {
            fillB = massOfB;
            remaining-=massOfB
            alert("B filled")
            alert("remaining Rice :"+remaining)
        }else{
            fillB = remaining;
           
            alert("B filled")
            alert("remaining Rice :"+remaining)
             remaining =0
        }
        if (massOfC < remaining ) {
            fillC = massOfC;
            remaining-=massOfC
            setRemainLoad(remaining)
            alert("c filled")
            alert("remaining Rice :"+remaining)
        }else{
            fillC = remaining;
            
            alert("c filled")
            alert("remaining Rice :"+remaining)
            remaining =0
        }
        setFillA(fillA);
        setFillB(fillB);
        setFillC(fillC);

         console.log(`Load distributed: A=${fillA}, B=${fillB}, C=${fillC}`);
      } catch (error) {
        
      }
    }
    const handleUnload = ()=>{
        let remaining =Number(unLoad)
         try {
        let ufillA =0
        let ufillB=0
        let ufillC =0

        if ( massOfC <= remaining ) {
            ufillC = massOfC;
            remaining-=massOfC
            alert("C filled")
            alert("remaining Rice :"+remaining)
        }else{
            ufillC = remaining;
            
            alert("C filled")
            alert("remaining Rice :"+remaining)
            remaining =0
        }
        if ( massOfB <= remaining ) {
            ufillB = massOfB;
            remaining-=massOfB
            alert("b filled")
            alert("remaining Rice :"+remaining)
        }else{
            ufillB = remaining;
            
            alert("b filled")
            alert("remaining Rice :"+remaining)
            remaining =0
        }
        if ( massOfA <= remaining ) {
            ufillA = massOfA;
            remaining-=massOfA
            setRemainULoad(remaining)
            alert('A filled')
            alert("remaining Rice :"+remaining)
        }else{
            ufillA = remaining;
            
            alert('A filled')
            alert("remaining Rice :"+remaining)
            remaining =0
        }
        setuFillA(ufillA);
        setuFillB(ufillB);
        setuFillC(ufillC);

         console.log(`Load distributed: A=${ufillA}, B=${ufillB}, C=${ufillC}`);
      } catch (error) {
        
      }
    }
useEffect(()=>{
calculateVolume()
   
},[])


  return (
    <div className='flex flex-1 flex-col  p-10 bg-amber-50/50 w-full h-screen'>
        <div className=' flex w-full justify-evenly'> <div className=' flex flex-col '>
             <h1 className=' text-xl mb-10'>Tunel A</h1>
             <div className=' border p-3 flex justify-center w-full flex-col  rounded-2xl'>
                 <p>radius :<span className=' text-2xl font-bold text-blue-950'>{radiusA}</span> m</p>
                 <p>Height :<span className=' text-2xl font-bold text-blue-950'>{heightA}</span> m</p>
                 <p>Volume :<span className=' text-2xl font-bold text-blue-950'>{Number(volumeA) ||0}</span> m³</p>
                 <p>Mass :<span className=' text-2xl font-bold text-blue-950'>{Number(massOfA) ||0}</span> KG</p>
                 <p>Load :<span className=' text-2xl font-bold text-blue-950'>{fillA ||0}</span> KG</p>
                 <p>UnLoad :<span className=' text-2xl font-bold text-blue-950'>{ufillA ||0}</span> KG</p>
             </div>
         </div>
         <div className=' flex flex-col '>
             <h1 className=' text-xl mb-10'>Tunel B</h1>
             <div className=' border p-3 flex justify-center w-full flex-col  rounded-2xl'>
                 <p>radius <span className=' text-2xl font-bold text-blue-950'>{radiusb}</span>m</p>
                 <p>Height <span className=' text-2xl font-bold text-blue-950'>{heightB}</span>m</p>
                 <p>Volume <span className=' text-2xl font-bold text-blue-950'>{Number(volumeB) ||0}</span>m³</p>
                 <p>Mass :<span className=' text-2xl font-bold text-blue-950'>{Number(massOfB) ||0}</span> KG</p>
                 <p>Load :<span className=' text-2xl font-bold text-blue-950'>{fillB ||0}</span> KG</p>
                 <p>Unload :<span className=' text-2xl font-bold text-blue-950'>{ufillB ||0}</span> KG</p>
             </div>
         </div>
         <div className=' flex flex-col '>
             <h1 className=' text-xl mb-10'>Tunel C</h1>
             <div className=' border p-3 flex justify-center w-full flex-col  rounded-2xl'>
                 <p>radius <span className=' text-2xl font-bold text-blue-950'>{radiusc}</span>m</p>
                 <p>Height <span className=' text-2xl font-bold text-blue-950'>{heightC}</span>m</p>
                 <p>Volume <span className=' text-2xl font-bold text-blue-950'>{Number(volumeC) ||0}</span>m³</p>
                 <p>Mass :<span className=' text-2xl font-bold text-blue-950'>{Number(massOfC) ||0}</span> KG</p>
                 <p>Load :<span className=' text-2xl font-bold text-blue-950'>{fillC ||0}</span>KG</p>
                 <p>unload :<span className=' text-2xl font-bold text-blue-950'>{ufillC ||0}</span> KG</p>
             </div>
         </div>
        </div>
        <div>
    <button onClick={handleLoad} className=' w-1/3 mt-9  duration-300 cursor-pointer text-2xl p-3 border-2 bg-gradient-to-br from-gray-100 to-gray-400 font-semibold'>Calculate Load</button>
          <p>Remaining Rice : {remainLoad}</p>
        </div>
          <div><button onClick={handleUnload} className=' w-1/3 mt-9  duration-300 cursor-pointer text-2xl p-3 border-2 bg-gradient-to-br from-gray-100 to-gray-400 font-semibold'>Calculate UnLoad</button>
   <p>Remaining Rice : {remainULoad}</p>
            </div>
        <button onClick={HandeleLoad} className=' w-1/3 mt-9  duration-300 cursor-pointer text-2xl p-3 border-2 bg-gradient-to-br from-gray-100 to-gray-400 font-semibold'>Add To load</button>
    </div>
  );
}

export default TunelDetails;
