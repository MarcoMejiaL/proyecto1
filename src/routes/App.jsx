import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from '@containers/Layout';
import Header from '@pages/Header';
import Portafolio from '@pages/Portafolio';
import Blog from '@pages/Blog';
import About from '@pages/About';

import '../styles/index.css';

const App = ()=>{
    return(
      <Layout>
        <Header/>
        <About/>
        <Portafolio/>
        <Blog/>
      </Layout>
      
    );
}

export default App;