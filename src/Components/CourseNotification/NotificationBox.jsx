import React from 'react'

const NotificationBox = () => {
  return (
      <div className="border p-4 border-gray-400 rounded-lg p-2 mt-5 mb-1 lg:ml-8 md:mx-4 md:ml-30 w-30 h-41 flex flex-col md:flex-row">
        <div className='md:w-56 lg:w-64 md:mr-3'>
          <div className="rounded-lg">
            <img src="/1.png" alt="Course Image" className="w-full h-auto" />
          </div>
        </div>
        <div className='ml-3 md:flex-grow'>
          <div className="text-lg font-semibold mt-3 md:mt-0">
            10 Days of code : The Complete Python Pro Bootcamp
          </div>
          <p className="text-sm text-gray-500 mb-1">Mentor: Fathima Shamly</p>
          <p className='text-sm text-black mb-1 font-medium'>Exclusive offer buy now</p>

          <div className="mr-4 my-2 font-bold text-xl">$18</div>
          <div className="flex text-sm text-gray-700">
          <button className=" bg-orange-500 text-white px-3 p-1 mr-5 rounded-md">
          Add to cart
        </button>
            <div><img src="/bookmark.svg" className="w-7 h-7" alt="saved" /></div>
          </div>
        </div>
      </div>
  )
}

export default NotificationBox
