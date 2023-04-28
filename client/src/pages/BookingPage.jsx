import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDate";


export default function BookingPage() {
    const {id} = useParams();
    const [bookings, setBookings] = useState(null);
    useEffect(() => {
        if (id) {
            axios.get('/bookings/').then(response => {
                const foundBooking = response.data.find(({_id}) => _id === id);
                if(foundBooking) {
                    setBookings(foundBooking);
                }
            });
        }
    }, [id])

    if (!bookings){
        return '';
    }
    return (
        <div className="my-8">
            <h1 className="text-3xl">{bookings.place.title}</h1>
            <AddressLink className="my-3 block">{bookings.place.address}</AddressLink>
            <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
                <div>
                    <h2 className="text-2xl mb-4">Your booking information:</h2>
                    <BookingDates booking={bookings}/>
                </div>
                <div className="bg-primary p-6 text-white rounded-2xl">
                    <div>Total price</div>
                    <div className="text-3xl">{bookings.price}</div>
                </div>
            </div>
            <PlaceGallery place={bookings.place}/>
        </div>
    );
}