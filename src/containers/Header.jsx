import React from 'react';
import '../styles/index.css';
import foto from '../assets/img/Hellbat.png'


const Header = ()=>{
    return (        
        <header className="header">
        <nav className="header__menu--desktop"> que ya esta hecho</nav>
        <section className="header__container--desktop">
            <div className="header__img--desktop">
                <img  src={foto} alt="foto"/>
            </div>
            <div className="header__name--desktop">
                <h2>Marco Antonio Mejia Lopez</h2>
                <span>Web Developer</span>
            </div>
        </section>
    </header>
    );
        
    
}
export default Header;