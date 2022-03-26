import React from 'react';
import '../styles/index.css';
/* import foto from '../assets/img/hell.png' */
import Menu from '@components/Menu';
import Title from '@components/Title';


const Header = ()=>{
    return (        
        <header className="header">
        <nav className="menu__base--deskto">
             <Menu/>
        </nav>
            <Title/>
    </header>
    );
        
    
}
export default Header;