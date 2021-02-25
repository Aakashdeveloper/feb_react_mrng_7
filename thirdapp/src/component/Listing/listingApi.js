import React,{Component} from 'react';
import axios from 'axios';


const url = "https://developerfunnel.herokuapp.com/hotellist"

class Listing extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    Filters
                </div>
                <div className="col-md-10">
                    Data
                </div>
            </div>
        )
    }
 
    componentDidMount(){
        let tripId = this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res) => {this.setState({hotellist:res.data})})
    }
}


export default Listing