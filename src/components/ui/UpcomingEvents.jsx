import React from 'react'
import { Button } from './button'

export default function UpcomingEvents() {
  return (
    <div className='flex justify-between flex-col md:flex-row'>
        <div className='space-y-3'>
          <h2 className='border-l-4 border-secondary text-black/60 text-2xl font-bold px-2'>
            UPCOMING EVENTS
          </h2>
          <div className='md:max-w-xl'>
            <p className='text-black/70'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut.
            </p>
          </div>
        </div>
        <div>
          <Button className='bg-transparent border-secondary border py-1'>
            SEE ALL UPCOMING EVENTS
          </Button>
        </div>
    </div>
  )
}
