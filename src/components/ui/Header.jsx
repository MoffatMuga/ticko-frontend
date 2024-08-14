import Link from "next/link"
import Mobile from "./Mobile"
const navs = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Events",
    path: "/"
  },
  {
    title: "MyOrders",
    path: "/myOrders"
  },
  {
    title: "Login",
    path: "/login"
  },
]

export default function Header() {
  return (
    <div className='bg-black h-12 mx-auto px-4 md:px-[150px] flex items-center justify-between'>
      <div className="flex items-center py-2">
        <h2 className='text-white font-bold text-xl'>Event<span className='text-secondary font-bold text-xl'>ie</span></h2>
      </div>
      <div className='hidden md:flex items-center space-x-3'>
        {navs.map((item, index) => (
          <Link key={index} href={item.path} className='text-white hover:text-secondary'>
            {item.title}
          </Link>
        ))}
      </div>
      <div className='md:hidden'>
        <Mobile />
      </div>
    </div>
  )
}
