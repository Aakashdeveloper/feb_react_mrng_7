import React,{Component} from 'react';

const bookingUrl = "";

class PlaceOrder extends Component{
    constructor(){
        super()

        this.state={
            id:Math.floor(Math.random()*1000),
            hotel_name:this.props.match.params.hotel_name,
            name:'',
            phone:''
        }
    }

    render(){
        return(
            <div className="container">
                
            </div>
        )
    }
}

export default PlaceOrder;