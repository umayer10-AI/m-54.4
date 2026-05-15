"use client"
import { bookingPost } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const BookingBtn = ({p,id}) => {
    // console.log(p)

    const a = async () => {

        const token = await authClient.token()
        const t = token?.data
        console.log(t)

        const b = {
            category: p.category,
            country: p.country,
            departureDate: p.departureDate,
            description: p.description,
            destinationName: p.destinationName,
            duration: p.duration,
            imageUrl: p.imageUrl,
            price: p.price,
        }
        await bookingPost(b,t)
    }

    return (
        <button onClick={a} className="w-full py-3 rounded-2xl bg-white text-purple-600 font-bold hover:scale-105 duration-300">
            Booking Now
        </button>
    );
};

export default BookingBtn;