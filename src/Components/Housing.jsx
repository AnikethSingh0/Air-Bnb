import React from 'react'

const Housing = () => {
    const data=[
        {
            image:"https://a0.muscache.com/im/pictures/2a8778ba-5a0b-45cd-986f-93fdb937f839.jpg?im_w=720&im_q=medq",
            title:"Houses",
            description:"If you need extra space, get an entire place all to yourself."
        },
        {
            image:"https://a0.muscache.com/im/pictures/bda7107c-9683-49a7-8d5c-65d8dbcd3675.jpg?im_w=720&im_q=medq",
            title:"Flats",
            description:"Stay in some of the most convenient locations with spaces in shared buildings."
        },
        {
            image:"https://a0.muscache.com/im/pictures/4603bd44-699a-4284-9b52-eebc49225879.jpg?im_w=720&im_q=medq",
            title:"Rooms",
            description:"Enjoy your own sleeping space and share a common area with others."
        }
    ]
  return (
    <div className='h-[64vh]  w-full bg-red-200 '>
        <h1>Big, small, we have it all</h1>
        <div className='w-[88%]  translate-x-[6%] flex flex-row h-[90%]'>
            {
                data.map((el,index)=>{
                    return(
                        <div key={index} className='flex flex-col items-center bg-green-700 justify-center h-full w-[100%] m-5'>
                            <img src={el.image} width={800} alt="" className=' rounded-lg h-[75%]'/>
                            <h2 className='text-xl font-semibold mt-2'>{el.title}</h2>
                            <p className='text-sm text-gray-600 mt-1'>{el.description}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Housing