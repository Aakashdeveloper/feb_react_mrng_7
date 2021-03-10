import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../container/Home';
import NewsDetails from '../container/NewsDetails';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/details/:id" component={NewsDetails}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;