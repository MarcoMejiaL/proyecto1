import React from 'react'
import foto from '@img/hell.png'

const Title = ()=>{
    return(
        <section className="header__container--desktop">
            <div className="header__img--desktop">
                <img  src={foto} alt="foto"/>
            </div>
            <div className="header__name--desktop">
                <h2>Marco Antonio Mejia Lopez</h2>
                <span>Web Developer</span>
            </div>
        </section>
        

        
    );

}

export default Title