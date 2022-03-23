import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from '../containers/Layout';
import Header from '../containers/Header';
import Portafolio from '../containers/Portafolio';
import Blog from '../pages/Blog';

import '../styles/index.css';

const App = ()=>{
    return(
      <Layout>
        <Header/>
        <Portafolio/>
        <Blog/>
      </Layout>
      
    );
}

export default App;