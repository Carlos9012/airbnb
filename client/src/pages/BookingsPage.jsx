
import { useEffect, useState } from "react";
import AccountPage from "../AccountNav";
import axios from "axios";

export default function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get('/bookings'.then(response => {
            setBookings(response.data);
        }))
    })
    
    return (
        <div>
            <AccountPage/>
            <div>
                {bookings?.length > 0 && bookings.map(booking => (
                    <div>
                        {booking.checkIn} - {booking.checkOut}
                    </div>
                ))}
            </div>
        </div>
    );
}