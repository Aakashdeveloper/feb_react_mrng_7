import React from 'react';
import Header from './Header';
import Footer from './Footer';

//functional
const Home = () => {
    return(
        <React.Fragment>
            <Header/>
                <h1>React App</h1>
                <h2>My app</h2>
            <Footer/>
        </React.Fragment>
    )
}

export default Home