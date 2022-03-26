import React from 'react'


const About = ()=>{
    return (
        <section className="about__container--mobile">
            <div className='about__container--title'>
            <h3 className=''>KNOWLEDGE</h3>
            </div>
        
        <div className="  about__container--content"> 
            
            <div className='about--container__me'> 

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugiat. Optio reiciendis est rem veritatis fugiat eius fuga asperiores, facilis cum mollitia soluta ducimus voluptas. Quo, dolor? Commodi, ea fugiat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus laborum earum quod dignissimos recusandae quae velit, consequatur ab voluptates rerum ratione blanditiis neque. Aspernatur nesciunt dicta magnam laboriosam libero repellat!</p>
            </div>
            <div className='about--container__list'>
            <ul className="about--container--grid">
                <li className='licardo'>
                     HTML
                </li>
                <li className='licardo'>
                    CSS
                </li >
                <li className='licardo'>
                    JAVASCRIPT
                </li>
                <li className='licardo'>
                    REACT
                </li>
                <li className='licardo'>
                    PYTON
                </li>
                <li className='licardo'>
                    NODEJS
                </li>
                <li className='licardo'>
                    WEBPACK
                </li>
                <li className='licardo'>
                    SCRUM
                </li>
                
            </ul>
            
            
            </div>
        </div>
    </section>
    )
}
export default About