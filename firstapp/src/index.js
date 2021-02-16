import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>React App</h1>
            <h2>My app</h2>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))