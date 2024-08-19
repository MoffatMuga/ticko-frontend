"use client"
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Events() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents()
    }, [])

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/events')
            console.log('Fetched Events: ', response.data)
            setEvents(response.data)
        } catch (error) {
            console.log('Error Fetching data: ', error)
        }
    }

    return (
        <div>
            <div className='felex flex-col items-center justify-center'>
                {events.map(event =>
                    <div className='border rounded-md ' key={event._id}>
                        <img src={event.photo} className='object-cover w-full h-48' />
                        <h1>{event.name}</h1>
                        <h2>{event.location}</h2>
                        <h3>{event.category}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
