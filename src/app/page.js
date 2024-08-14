import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import UpcomingEvents from "@/components/ui/UpcomingEvents";
import EventSlide from "@/components/ui/EventSlide";
import EventCategories from "@/components/ui/EventCategories";
import Footer from "@/components/ui/Footer";
import { Section } from "lucide-react";

export default function Home() {



  return (
    <section className="min-h-screen relative">
      {/* Image Section */}
      <div className="relative bg-cover bg-center bg-no-repeat h-[430px] w-full" style={{ backgroundImage: `url('/event1.jpg')` }}>
        <div className="top-0 inset-0 bg-black/20 h-full absolute w-full"></div>
        <div className="container mx-auto md:px-[150px] px-4 relative w-full h-full">
          <div className="flex items-center justify-center absolute inset-x-0 bottom-20 space-y-4 flex-col">
            <h2 className="text-center font-bold text-5xl text-white">Make Your Dream Come True</h2>
            <h2 className="text-center text-2xl text-white">Meet your favorite artists, sport teams and parties</h2>

            <div className="flex flex-row justify-between items-center border-white border-2 rounded-full">
              <form>
                <input type="text" placeholder="Search event" className="bg-white/30 text-white rounded-l-full h-8 px-2 md:w-[300px]" />
              </form>
            </div>

            <div className="flex items-center justify-center gap-4">
              <FaLocationDot className="text-heading text-xl" />
              <span className="text-white text-md">Kenya</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-footer py-3 h-[160px]">
        <div className="container mx-auto md:px-[150px] px-4">
          <div className="flex justify-between mb-6">
            <h2 className="text-secondary font-bold text-2xl border-l-4 border-secondary px-2">TODAY'S EVENTS</h2>
            <p className="text-secondary">Date</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="flex flex-col space-y-1 items-center text-white">
              <h2>Time</h2>
              <h2>Location</h2>
              <Button>Book Now</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="mt-10 container mx-auto md:px-[150px] px-4">
        <UpcomingEvents />
      </div>

      {/* Event Slide Section */}
      <div className="mt-10 container mx-auto md:px-[150px] px-4">
        <EventSlide />
      </div>

      {/* Event Categories Section */}
      <div className="mt-10 container mx-auto md:px-[150px] px-4">
        <div className="space-y-5">
          <div>
            <h2 className="text-black/60 font-bold text-2xl border-l-4 border-secondary px-2">EVENTS BY CATEGORIES</h2>
          </div>
          <EventCategories />
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="mt-10 mb-10 container mx-auto md:px-[150px] px-4 flex items-center justify-center flex-col gap-4">
        <div className="space-y-3 border-b-2 border-black/70 py-4 px-6">
          <h2 className="text-black/70 font-semibold text-2xl text-center">Stay Up to date With Your Favorite Events!</h2>
          <p className="text-black/70 font-md text-sm text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
          <form>
            <input className="h-10 md:w-80 outline-none bg-black/20 px-3 text-black/80" placeholder="Your Email Address" />
          </form>
          <Button className="border text-white font-md rounded-none px-4 py-2">
            Sign Me Up
          </Button>
        </div>
      </div>
    </section>
  );


}
