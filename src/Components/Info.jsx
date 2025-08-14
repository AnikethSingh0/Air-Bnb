import React from 'react'

const Info = () => {
    const data=[
        {
            logo:"https://a0.muscache.com/im/pictures/7c7ccb34-a563-4f25-9fba-e4a46e2dbc3a.jpg?im_w=720",
            title: "Enjoy some flexibility",
            content:"Stays with flexible cancellation make it easy to rebook if your plans change."
        },
        {
            logo:"https://a0.muscache.com/im/pictures/d51be571-b8cf-4379-8d3f-7c5e56c9def5.jpg?im_w=720",
            title: "More than 7M active listings",
            content:"Join more than 1 billion guests who’ve found getaways in over 220 countries and destinations"
        },
        {
            logo:"https://a0.muscache.com/im/pictures/a52e81a9-e390-4e74-b197-1aeeffd0e5ab.jpg?im_w=720",
            title: "100+ filters for tailored stays",
            content:"Pick your price range, the number of rooms you want and other key amenities to find the stay that fits your needs."
        }
    ]
  return (
    <div className='h-[30vh] w-full relative'>
        <div className='translate-x-[3%] w-[94%]  flex flex-row justify-center items-center h-full '>
            {
                data.map((el,index)=>{
                    return(
                        <div key={index} className='flex flex-col h-full  justify-evenly w-[27%] m-7 '>
                            <img src={el.logo} alt="" width={30} className='absolute bottom-[23vh] ml-4 bg-red-700'/>
                            <div className='ml-5'>
                                <h2 className='text-lg font-semibold '>{el.title}</h2>
                                <p className='text-sm text-gray-600 pt-2'>{el.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Info