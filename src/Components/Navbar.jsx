import React from 'react'
const Sidebar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center  bg-white p-4 shadow-sm'>
        <img src="./assets/Airbnb-Logo.png" alt="" width={90}/>
        <ul className='text-sm w-[200px] underline  flex justify-between items-center ml-10'>
          <li>Airbnb your place</li>
          <li className='mr-4'>Sign up</li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar