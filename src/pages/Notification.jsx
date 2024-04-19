import React from 'react'

const Notification = () => {
  return (
       <div className="notification">
      <h3 className="heading ml-8 mt-3 text-blue-500 text-lg">Cart's</h3>
         <div className="border border-gray-400 rounded-lg p-2 mt-5 mb-1 lg:ml-8 md:mx-4 md:ml-30 w-30 h-41">
            <div className='flex'>
              <div className="rounded-lg">
            <img src="/public/1.png" alt="Course Image" className="w-73 h-40" />
          </div>
          <div className='ml-3'>
          <div className="text-lg font-semibold">
            10 Days of code : The Complete Python Pro Bootcamp
          </div>
          <p className="text-sm text-gray-500 mb-1">Mentor: Fathima Shamly</p>
          <p className='text-sm text-black mb-1 font-medium'>Exclusive offer buy now</p>

            <div className="mr-4 my-2 font-bold text-xl">$18</div>
            <div className="flex text-sm text-gray-700">

            <button className="mr-4 bg-orange-500 text-white px-2 rounded-xl">
              Add to cart
            </button>
            <div><img src="/public/bookmark.svg" className="w-7 h-7" alt="saved"></img></div>
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Notification
