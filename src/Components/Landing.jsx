import React from 'react'

const Landing = () => {
    return (
            <div className='w-screen h-svh bg-white text-black flex justify-between items-center pl-[150px] w-screen h-svh bg-white text-black'>
                {/* left section start  */}
                <div>
                    <h1 className='text-2xl text-black top-0 fixed mt-10'>DevDopz</h1>
                    <h1 style={{ fontFamily: 'sans-serif' }} className='text-4xl font-[500] mb-5'>India's Best Self Learning <br />Platfrom for developers</h1>
                    <div className='flex justify-center  w-[300px]'>
                        <button className='bg-blue-600 hover:text-[18px] h-[45px] w-[140px] rounded-xl text-white mr-5'>Get Started</button>
                        <button className='bg-white-600 h-[45px] w-[140px] border-2 rounded-xl hover:border-4 text-black'>Learn More</button>
                    </div>
                </div>

                {/* left section end  */}

                {/* right section start  */}
                <div className=''>
                    <img draggable='false' width={800} src="public/Heroimage.png" alt="" />
                </div>
                {/* right section end  */}
        </div>
    )
}

export default Landing
