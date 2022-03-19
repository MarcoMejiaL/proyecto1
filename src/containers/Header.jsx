import React from 'react';
import '../styles/index.css'

const Header = ()=>{
    return (        
    <header>
        <div className=" header__img--mobile"></div>
        <div className="basic__frame header__tittle--mobile">
            <h2>Marco Antonio Mejia Lopez</h2>
        </div>
        <div className="basic__frame header__rank--mobile">
            <p>Web Developer</p>
        </div>
    </header>
    );
        
    
}
export default Header;