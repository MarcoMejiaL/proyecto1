import React from 'react'
import { useState, useEffect } from "react";

const PortafolioImg  = ({foto})=>{
    


    return( 
    <img src={foto.download_url} alt={foto.author} loading='lazy' />
    )
}

export default PortafolioImg