import React from "react";

const Booking = () => {
  return (
    <div className="relative">
      <div className="h-[415px] w-[380px] bg-[#ffff] shadow-2xl rounded-2xl">
        <div className=" translate-x-[13%] translate-y-[10%] w-[300px] h-[300px]">
          <p className="text-3xl text-black font-bold ">
            Find places to stay on Airbnb
          </p>
          <p className="text-[#75859c] text-sm mt-1">
            Discover entire homes and rooms perfect for any trip.
          </p>
          <p className="absolute text-[9px] capitalize font-bold left-[1.1rem] top-[8.5rem]">
            LOCATION
          </p>
          <input
            type="text"
            className="border mt-3 cursor-pointer pt-5 border-[#dadada] rounded-md p-2 w-full placeholder:text-sm placeholder:pl-2"
            placeholder="Anywhere"
          />

          {/* other input tag */}
          <div className="flex items-center border border-[#dadada]  rounded-md overflow-hidden w-full max-w-sm mt-2">
            {/* Check-in Section */}
            <div className="flex-1 px-4 py-2">
              <label className="block text-[9px] font-bold text-gray-800 tracking-wider">
                CHECK IN
              </label>
              <input
                type="text"
                placeholder="Add dates"
                className="w-full bg-transparent text-sm text-gray-500 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Divider Line */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* Check-out Section */}
            <div className="flex-1 px-4 py-2">
              <label className="block text-[9px] font-bold text-gray-800 tracking-wider">
                CHECK OUT
              </label>
              <input
                type="text"
                placeholder="Add dates"
                className="w-full bg-transparent text-sm text-gray-500 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
            {/* Guests Section */}
            <div className="flex items-center border border-[#dadada]  rounded-md overflow-hidden w-full max-w-sm mt-2">
            {/* Check-in Section */}
            <div className="flex-1 px-4 py-2">
              <label className="block text-[9px] font-bold text-gray-800 tracking-wider">
                ADULTS
              </label>
              <select
                type="text"
                placeholder="Add dates"
                className="w-full bg-transparent text-sm text-black placeholder-gray-500 focus:outline-none"
              >
                <option value="">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            {/* Divider Line */}
            <div className="w-px h-8 bg-gray-300"></div>

            {/* Check-out Section */}
            <div className="flex-1 px-4 py-2">
              <label className="block text-[9px] font-bold text-gray-800 tracking-wider">
                CHILDREN
              </label>
              <select
                type="text"
                placeholder="Add dates"
                className="w-full bg-transparent text-sm text-black placeholder-gray-500 focus:outline-none"
              >
                <option value="">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
        <button className="bg-[#da0c61] cursor-pointer text-white px-[10vw] py-2 rounded-md absolute left-[2.6rem] bottom-[1.5rem]">
          Search
        </button>
      </div>
    </div>
  );
};

export default Booking;
