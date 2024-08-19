import { useState, useEffect } from "react";
import axios from "axios";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({ location: '', category: '', date: '', name: '', photo: null });
    const [isEditing, setIsEditing] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchEvents();
    }, [currentPage]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/events?${currentPage}`);
            setEvents(response.data);
            setTotalPages(response.data.totalPages || 1);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = new FormData();
        for (const key in formData) {
            eventData.append(key, formData[key]);
        }

        if (isEditing) {
            updateEvent(eventData);
        } else {
            createEvent(eventData);
        }
        setFormData({ location: '', category: '', date: '', name: '', photo: null });
        setIsEditing(false);
        setEditId(null);
        fetchEvents();
    };

    const createEvent = async (eventData) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            };

            const response = await axios.post('http://localhost:8000/api/events', eventData, config);
            console.log('Event created successfully:', response.data);
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    const updateEvent = async (eventData) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            };
            await axios.put(`http://localhost:8000/api/event/${editId}`, eventData, config);
            console.log('Event updated successfully');
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    const handleDelete = async (eventId) => {
        try {
            await axios.delete(`http://localhost:8000/api/event/${eventId}`);
            fetchEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleEdit = (event) => {
        setFormData({ location: event.location, category: event.category, date: event.date, name: event.name, photo: null });
        setEditId(event._id);
        setIsEditing(true);
    };

    return (
        <div className="p-4 flex md:flex-row flex-col space-x-4">
            <form onSubmit={handleSubmit} className="mb-4 flex flex-col items-center justify-center gap-3">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Event Name"
                    className="border p-2 mr-2"
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="Event Category"
                    className="border p-2 mr-2"
                    required
                />
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Event Location"
                    className="border p-2 mr-2"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="border p-2 mr-2"
                    required
                />
                <input
                    type="file"
                    name="photo"
                    onChange={handleInputChange}
                    className="border p-2 mr-2"
                    accept="image/*"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    {isEditing ? 'Update Event' : 'Create Event'}
                </button>
                {isEditing && (
                    <button
                        type="button"
                        onClick={() => {
                            setIsEditing(false);
                            setFormData({ name: '', date: '', category: '', location: '', photo: null });
                        }}
                        className="ml-2 p-2"
                    >
                        Cancel
                    </button>
                )}
            </form>

            {/* Events Table */}
            <div className="overflow-x-auto flex-1">
                <table className="bg-white border w-full">
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Location</th>
                            <th className="py-2 px-4 border">Category</th>
                            <th className="py-2 px-4 border">Date</th>
                            <th className="py-2 px-4 border">Status</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events && events.length > 0 ? (
                            events.map((event) => (
                                <tr key={event._id}>
                                    <td className="py-2 px-4 border">{event.name}</td>
                                    <td className="py-2 px-4 border">{event.location}</td>
                                    <td className="py-2 px-4 border">{event.category}</td>
                                    <td className="py-2 px-4 border">{event.date}</td>
                                    <td className="py-2 px-4 border">
                                        {new Date(event.date) > new Date() ? 'Upcoming' : 'Past'}
                                    </td>
                                    <td className="py-2 px-4 border">
                                        <button onClick={() => handleEdit(event)} className="mr-2 text-blue-500">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(event._id)} className="text-red-500">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-2">
                                    No events found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 bg-gray-300"
                    >
                        Previous
                    </button>
                    <span className="p-2">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
