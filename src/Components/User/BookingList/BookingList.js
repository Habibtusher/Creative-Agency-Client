import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import BookingDetail from '../BookingDetail/BookingDetail';

const BookingList = () => {
    const [booking, setBookingList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('https://damp-ocean-55307.herokuapp.com/bookingList?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setBookingList(data));
    }, []);
    return (
        <div className="row">
            <Topbar></Topbar>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style={{ margin:"0 auto"}} className="col-md-8 mt-4 ">
                <div className="row">

                    {
                        booking.map(book => <BookingDetail book={book} ></BookingDetail>)
                    }

                </div>
            </div>
        </div>

    );
};

export default BookingList;