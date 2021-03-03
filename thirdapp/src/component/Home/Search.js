import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const url = "https://developerfunnel.herokuapp.com/location"
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    // declare
    constructor(){
        super()
        console.log(">>>>inside>>>constructor")
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        console.log("inrenderCity",data)
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity=(event)=> {
        const cityId = event.target.value;
        fetch(`${hurl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    handlehotel =(event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    // display
    render(){
        console.log(">>>>inside>>>render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trïp With üs
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>------SELECT CITY------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput" onChange={this.handlehotel}>
                        <option>------SELECT HOTEL-----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    // onload api call
    componentDidMount(){
        console.log(">>>>inside>>>componentDidMount")
        fetch(url,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default withRouter(Search);