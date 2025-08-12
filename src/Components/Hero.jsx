import React from 'react'
import Booking from './Booking';
const Hero = () => {
  return (
    <div>
        <div className='relative'>
            <div className='absolute left-[6vw] top-[11vh] z-999'>
                <Booking  />
            </div>
            <img src="https://a0.muscache.com/im/pictures/9caaca2d-6892-4638-b675-6a879974f5ed.jpg?im_w=1920" alt="" width={800} className="rounded-lg shadow-md absolute left-[27vw] top-[6vh]" />
        </div>
    </div>
  )
}

export default Hero