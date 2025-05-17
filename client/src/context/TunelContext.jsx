import axios from "axios"
import { createContext, useEffect, useState } from "react"
import toast from "react-hot-toast"


const tunelContext = createContext()

export const AppContecxtProvider = ({children})=>{
    const [radiusA,setRadiusA] = useState('')
    const [radiusb,setRadiusb] = useState('')
    const [radiusc,setRadiusc] = useState('')

    {/*Height set*/}
    const [heightA,setHeightA] = useState('')
    const [heightB,setHeightB] = useState('')
    const [heightC,setHeightC] = useState('')
     {/*Load data get*/}
     const [date,setDate]= useState('')
     const[time ,setTime] = useState('')
     const [load ,setLoad] = useState('')
     const[unLoad,setUnLoad] =useState('')
    
     {/*Load data get*/}
     const [volumeA,setVolumeA] =useState(null)
     const [volumeB,setVolumeB] =useState(null)
     const [volumeC,setVolumeC] =useState(null)

     const [massOfA,setMassOfA]=useState(null)
     const [massOfB,setMassOfB]=useState(null)
     const [massOfC,setMassOfC]=useState(null)
     const [tableData,setTableData]=useState([])
      const backendUrl = import.meta.env.VITE_BACKEND_URL

     
     const calculateVolumeB= ()=>{
        const rB = parseFloat(radiusb)
        const hB = parseFloat(heightB)
        const volumeofb = Math.PI*rB*rB*hB.toFixed(2)
        const massofB = volumeofb*200;
        try {
            setVolumeB(volumeofb.toFixed(2))
            setMassOfB(massofB.toFixed(2))
            console.log(volumeB);
            console.log(massofB);
            
            
        } catch (error) {
            
        }
     }
     const calculateVolumC= ()=>{
        const rC = parseFloat(radiusc)
        const hc = parseFloat(heightC)
        const volumeofc = Math.PI*rC*rC*hc.toFixed(2);
        const massodC = volumeofc*200;
        try {
            setVolumeC(volumeofc.toFixed(2))
            setMassOfC(massodC.toFixed(2))
            console.log(volumeC);
            console.log(massodC);
            
            
        } catch (error) {
            
        }
     }
const calculateVolume= ()=>{
        const rA = parseFloat(radiusA)
        const hA = parseFloat(heightA)
        const volumeofA = Math.PI*rA*rA*hA.toFixed(2);
        const massoA = volumeofA*200
        try {
            setVolumeA(volumeofA.toFixed(2))
            setMassOfA(massoA.toFixed(2))
            console.log(volumeofA);
            calculateVolumeB()
            calculateVolumC()
        } catch (error) {
            
        }
     }


     const handleData = async () => {
        try {
            const {data} = await axios.get(backendUrl+'/api/auth/data')
            if (data.success) {
                console.log(data.data);
                setTableData(data.data)
            }
        } catch (error) {
            toast.error(error)
        }
     }

     useEffect(()=>{
        calculateVolumeB()
     },[radiusb,heightB])
useEffect(()=>{
        calculateVolumC()
     },[radiusc,heightC])     

     useEffect(()=>{
  handleData()
     },[])

   const value ={
radiusA,setRadiusA,radiusb,setRadiusb,radiusc,setRadiusc,heightA,setHeightA,heightB,setHeightB,heightC,setHeightC,date,setDate,time ,setTime,load ,setLoad,unLoad,setUnLoad
,calculateVolume,volumeA,volumeB,volumeC ,calculateVolumeB,calculateVolumC  ,massOfA,massOfB,massOfC,tableData,handleData

,backendUrl}
    return <tunelContext.Provider value={value}>
          {children}
    </tunelContext.Provider> 
}

export default tunelContext