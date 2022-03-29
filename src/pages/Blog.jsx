import React from 'react'

import BlogsNewsContainer from '@containers/BlogsNewsContainer'
import BlogsPostsContainer from '@containers/BlogsPostsContainer'

const Blog = ()=>{
    return(

    <section id='blog' className="blogs-main">

            <BlogsNewsContainer/>
            <BlogsPostsContainer/>
  
   
    </section>
    )
}

export default Blog