import React, {useState, useEffect} from 'react'

import axios from 'axios'
import PortafolioImg from '@components/PortafolioImg'


const APIurl = "https://picsum.photos/v2/list?page=1&limit=10"

const Portafolio = ()=>{
    const [fotos, setFotos] =useState([]);

    useEffect(async()=>{
        const response = await axios(APIurl);
        setFotos(response.data)
    }, [])

    
    
    return(
        <section className="portafolio__content--mobile">
            <div>
                {fotos.map(foto =>(
                    <PortafolioImg/>
                )
                    
                    
                )} 
                
            </div>
        </section>
    )
}

export default Portafolio;