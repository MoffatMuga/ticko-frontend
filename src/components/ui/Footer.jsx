import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg";

export default function Footer() {
    return (
        <div className='bg-footer bottom-0 md:h-[200px] container mx-auto md:px-[150px] px-4 lg:py-10 py:10 h-auto space-y-6 '>
            <div className='grid grid-cols-1 md:grid-cols-3  '>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-secondary text-xl font-bold text-center'>
                        ABOUT US
                    </h2>
                    <p className='text-white text-sm '>
                        TicketFlo is an easy-to-use online ticketing and guest registration platform, centric in its design to deliver powerful yet affordable ticketing and event solutions
                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-secondary text-xl font-bold text-center'>
                        FOLLOW US
                    </h2>
                    <div className='flex flex-row gap-4 text-secondary justify-center text-2xl'>
                        <CgTwitter className='cursor-pointer hover:scale-125 transition-transform transition-500' />
                        <CgFacebook className='cursor-pointer hover:scale-125 transition-500' />
                        <CgInstagram className='cursor-pointer hover:scale-125 transition-500' />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-secondary text-xl font-bold text-center'>
                        CONTACT US
                    </h2>
                    <div className='flex flex-col gap-2 text-seconadry text-white text-center'>
                        <p>0715662604</p>
                        <p>info@eventie.ac.ke</p>

                    </div>
                </div>

            </div>
            <div className='bottom-2  mt-4'>
                <p className='text-white text-center'>Developed by DevMuga @2024</p>
            </div>

        </div>
    )
}
