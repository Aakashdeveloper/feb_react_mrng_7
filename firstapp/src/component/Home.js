import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay'

//functional
class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    filterNews=(userInput) => {
        const Output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1)
        })

        this.setState({filtered:Output})
    }

    render(){
        console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText = {(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2022" month="feb"/>
            </React.Fragment>
        )
    }
    
}

export default Home