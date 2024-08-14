import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

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

export default function Mobile() {
    return (
        <div>
            <Sheet>
                <SheetTrigger className='text-white text-xl font-bold items-center flex'><CiMenuBurger /></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className='mt-[10rem] mb-[3rem]'>
                            <h2 className='text-white font-bold text-5xl'>Event<span className='text-secondary font-bold text-5xl'>ie</span></h2>
                        </SheetTitle>
                        <SheetDescription >
                            <div className='flex flex-col items-center space-y-6'>
                                {navs.map((item, index) => (
                                    <Link key={index} href={item.path} className='text-white hover:text-secondary text-2xl'>
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}
