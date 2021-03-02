import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import ListingApi from './Listing/listingApi';
import HotelDetails from './details/hotelDetails';
import PlaceBooking from './booking/placeBooking';
import BookingApi from './booking/bookingApi';

const Routing =() =>{
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/list/:id" component={ListingApi}/>
                <Route path="/details/:id" component={HotelDetails}/>
                <Route path="/booking/:hotel_name" component={PlaceBooking}/>
                <Route path="/viewBooking" component={BookingApi}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;