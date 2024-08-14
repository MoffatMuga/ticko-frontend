import { Button } from "./button"

export default function EventCategories() {
  return (
    <div className='grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 gap-5'>
        <div className="items-center justify-center relative group overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-green/30 transition-shadow">
            <div className="lg:h-86 lg:w-96">
                <img src='event.jpg' className='w-full h-full object-cover group-hover:scale-125  transition-transform duration-500'/>
            </div>
            <div className="absolute inset-0 bg-green bg-opacity-50"></div>
            <div className="absolute flex px-9 inset-0 flex-col justify-center text-center items-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="font-bold text-2xl text-white">
                    Concerts
                </h1>
                <p className='text-white font-medium text-lg mb-3 transition-opacity tansition-300'> Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                <Button className='shadow shadow-black/60 bg-transparent text-white'>
                    see more
                </Button>

            </div>
        </div>

        <div className="items-center justify-center relative group overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-red/30 transition-shadow">
            <div className="lg:h-86 lg:w-96">
                <img src='event.jpg' className='w-full h-full object-cover group-hover:scale-125  transition-transform duration-500'/>
            </div>
            <div className="absolute inset-0 bg-red bg-opacity-50"></div>
            <div className="absolute flex px-9 inset-0 flex-col justify-center text-center items-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="font-bold text-2xl text-white">
                    Concerts
                </h1>
                <p className='text-white font-medium text-lg mb-3 transition-opacity tansition-300'> Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                <Button className='shadow shadow-black/60 bg-transparent text-white'>
                    see more
                </Button>

            </div>
        </div>

        <div className="items-center justify-center relative group overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-secondary/30 transition-shadow">
            <div className="lg:h-86 lg:w-96">
                <img src='event.jpg' className='w-full h-full object-cover group-hover:scale-125  transition-transform duration-500'/>
            </div>
            <div className="absolute inset-0 bg-secondary bg-opacity-50"></div>
            <div className="absolute flex px-9 inset-0 flex-col justify-center text-center items-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="font-bold text-2xl text-white">
                    Concerts
                </h1>
                <p className='text-white font-medium text-lg mb-3 transition-opacity tansition-300'> Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                <Button className='shadow shadow-black/60 bg-transparent text-white'>
                    see more
                </Button>

            </div>
        </div>

        <div className="items-center justify-center relative group overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-blue-dark/30 transition-shadow">
            <div className="lg:h-86 lg:w-96">
                <img src='event.jpg' className='w-full h-full object-cover group-hover:scale-125  transition-transform duration-500'/>
            </div>
            <div className="absolute inset-0 bg-blue-dark bg-opacity-50"></div>
            <div className="absolute flex px-9 inset-0 flex-col justify-center text-center items-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="font-bold text-2xl text-white">
                    Concerts
                </h1>
                <p className='text-white font-medium text-lg mb-3 transition-opacity tansition-300'> Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                <Button className='shadow shadow-black/60 bg-transparent text-white'>
                    see more
                </Button>

            </div>
        </div>

        <div className="items-center justify-center relative group overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-blue-light/30 transition-shadow">
            <div className="lg:h-86 lg:w-96">
                <img src='event.jpg' className='w-full h-full object-cover group-hover:scale-125  transition-transform duration-500'/>
            </div>
            <div className="absolute inset-0 bg-blue-light bg-opacity-50"></div>
            <div className="absolute flex px-9 inset-0 flex-col justify-center text-center items-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="font-bold text-2xl text-white">
                    Concerts
                </h1>
                <p className='text-white font-medium text-lg mb-3 transition-opacity tansition-300'> Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                <Button className='shadow shadow-black/60 bg-transparent text-white'>
                    see more
                </Button>

            </div>
        </div>

        <div className="items-center justify-center relative group overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-purple/30 transition-shadow">
            <div className="lg:h-86 lg:w-96">
                <img src='event.jpg' className='w-full h-full object-cover group-hover:scale-125  transition-transform duration-500'/>
            </div>
            <div className="absolute inset-0 bg-purple bg-opacity-50"></div>
            <div className="absolute flex px-9 inset-0 flex-col justify-center text-center items-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="font-bold text-2xl text-white">
                    Concerts
                </h1>
                <p className='text-white font-medium text-lg mb-3 transition-opacity tansition-300'> Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
                <Button className='shadow shadow-black/60 bg-transparent text-white'>
                    see more
                </Button>

            </div>
        </div>
    </div>
  )
}
