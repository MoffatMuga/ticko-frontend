
import { FaUserCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



export default function AdminHeader() {

    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'))
        setUser(userData)
    },[])
  return (
    <div className='flex flex-row  justify-between w-full items-center py-4 '>
        <div className='flex flex-start'>
            <h2 className='text-black/60 font-bold text-xl'>Event<span className='text-secondary font-bold text-xl'>ie</span></h2>
        </div>

        <div className='flex '>
            {user ? (
                <div className='flex space-x-3 items-center cursor-pointer' onClick={() => router.push('admin/Profile')} >
                    <img src={user.photo} alt={user.name} className='h-10 w-10 rounded-full object-cover' />
                    <span className='font-medium text-center text-black/60'>{user.firstName}</span>
                </div>
            ) : (
                <FaUserCircle className='w-10 h-10 rounded-full'/>
            )}
        </div>
        
    </div>
  )
}
