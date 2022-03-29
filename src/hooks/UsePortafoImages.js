import { useState, useEffect } from "react";
import axios from 'axios'



const UsePortafoImages = (APIurl)=>{

    const [fotos, setFotos] =useState([]);

useEffect(async()=>{
    const response = await axios(APIurl);
    setFotos(response.data)
}, [])
return fotos

}





export default UsePortafoImages