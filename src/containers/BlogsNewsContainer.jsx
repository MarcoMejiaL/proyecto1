import React from 'react'

const BlogsNewsContainer = ()=>{
    return(
        <section className="blogs-news-container">
        <div className=" blogs-main-new">
            
            <div className="blogs-news-img-container">
                <img src="assets/img/main-news-img.png" alt=""/>
            </div>
            <div className="blogs-news-info-container">
                <h2>Título del blogpost</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vero veniam officiis? Error magnam numquam.</p>
                <a href="" className="blogs-button">Leer más</a>
            </div>
        </div>
    </section>
    )
}
export default BlogsNewsContainer