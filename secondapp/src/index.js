import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Post from './component/Post';
import Profile from './component/Profile';

ReactDOM.render(
    <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        <Link to="/profile">Profile</Link>
        <Route exact path="/" component={Home}/>
        <Route path="/post" component={Post}/>
        <Route path="/profile" component={Profile}/>
    </BrowserRouter>
,document.getElementById('root')
)


