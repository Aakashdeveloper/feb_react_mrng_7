import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        //let details = this.state.details
        let {details} = this.state;
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.state.details.name}</h3>
                    </div> 
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                        </div>
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>OverView</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>
                                <TabPanel>
                                    <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Phone: 988987877</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <br/>
                        <Link to="{`/booking/${details.name}`}" className="btn btn-success">Place Booking</Link>
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({details:response.data[0]})
    }
}

export default Details;