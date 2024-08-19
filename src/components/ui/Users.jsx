"use client"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Users() {

  const [users, setUsers] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchUsers()
  }, [currentPage])

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/users?${currentPage}`)
      console.log('Fetched Events: ', response.data)
      setUsers(response.data)
      setTotalPages(response.data.totalPages || 1)
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  return (
    <div className="p-4 flex md:flex-row flex-col space-x-4">
      <div className='overflow-x-auto'>
        <table className='w-full border bg-white'>
          <thead className='bg-secondary text-white'>
            <tr>
              <th className="py-2 px-4 border">First Name</th>
              <th className="py-2 px-4 border">Last Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border">{user.firstName}</td>
                  <td className="py-2 px-4 border">{user.lastName}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                  <td className="py-2 px-4 border">{user.mobile}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-2">
                  No users  found.
                </td>
              </tr>
            )}

          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button className='bg-gray-100' onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            page {currentPage} of {totalPages}
          </span>
          <button className='bg-gray-100' onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
