import React from 'react'
import PortafolioImg from '@components/PortafolioImg'
import UsePortafoImages from '../hooks/UsePortafoImages'


const APIurl = "https://picsum.photos/v2/list?page=1&limit=15"

const Portafolio = ()=>{
   const fotos = UsePortafoImages(APIurl)

    
    
    return(
        <section id='portafolio' className="portafolio__content--mobile">
            <div>
                {fotos.map(foto =>(
                    <PortafolioImg 
                    foto={foto} 
                    key={foto.id}
                    />
                )
                    
                    
                )} 
                
            </div>
        </section>
    )
}

export default Portafolio;