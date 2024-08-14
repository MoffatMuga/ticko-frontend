import { Button } from "./button"

const cards = [
    {
        image: '/event.jpg',
        date: '3 AUG 2024',
        title: 'Choma 254',
        location:'Nairobi'
    },
    {
        image: '/event1.jpg',
        date: '7 SEP 2024',
        title: 'Ohangla ',
        location:'Kisumu'
    },
    {
        image: '/event.jpg',
        date: '23 DEC 2024',
        title: 'Aluta',
        location:'Eldoret'
    }
]

export default function EventSlide() {
  return (
    <div className = 'flex flex-col md:flex-row justify-between items-center gap-2 '>
        {
            cards.map((item, index) => (
                <div key={index}  className='relative  md:h-[200px] w-[200px] h-[200px] items-center md:w-[300px] bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${item.image}`}}>
                    
                    <div className='absolute  p-2 -left-0 -top-2 flex flex-col w-10 text-heading bg-black/20 font-medium'>
                        {item.date}
                    </div>
                    <div className='inset-x-0 absolute bottom-1 px-2 flex flex-row justify-between'>
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-white font-medium'>{item.title}</h2>
                            <h2 className='text-black/70'>{item.location}</h2>

                        </div>
                        <div>
                            <Button className='text-white'>
                                Get Ticket
                            </Button>
                        </div>
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
}
