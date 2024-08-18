"use client"
import { useState } from 'react';
import AdminHeader from '@/components/ui/AdminHeader';
import SideBar from '@/components/ui/SideBar';
import Events from './Events';
import Tickets from '../Tickets';
import Home from './Home';
import Payment from './Payment';
import Users from './Users';
import Profile from './Profile';


export default function AdminLayout() {
    const [activeComponent, setActiveComponent] = useState('Home'); // Default to Home

    const renderContent = () => {
        switch (activeComponent) {
             case 'Home':
                 return <Home />;
            case 'Events':
                return <Events />;
            case 'Tickets':
                return <Tickets />;
            case 'Users':
                return <Users />;
            case 'Payments':
                return <Payment />;
            case 'Profile':
                return <Profile />;
            default:
                return <Home />;
        }
    };

    return (
        <div className=''>
            <div className='flex w-screen h-screen '>
              <div className='w-[30%]'>
                <SideBar setActiveComponent={setActiveComponent} />
              </div>
                
                <div className='w-[100%] flex flex-col space-y-8 '>
                    < div className='h-16 shadow-2xl px-4 rounded-md mt-4 '>
                        <AdminHeader />
                    </div>
                   
                    <div className="p-4 border">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
