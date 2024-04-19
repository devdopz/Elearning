import React from 'react';

const Login = () => {
    return (
        <div className='min-h-screen bg-gray-200 flex justify-center items-center'>
            <form className='bg-white p-6 md:p-10 rounded-lg shadow-md flex flex-col justify-center items-center max-w-md w-full'>
                <div className='flex mb-10 items-center justify-center flex-row'>
                    <h1 className='text-3xl'>Login <span style={{fontSize:"18px"}} className='mr-4'>into</span></h1>
                    <img width={50} className='mr-3' src="public/Logo.png" alt="" />
                </div>
                <input className='w-full px-4 py-3 mb-3 rounded-md border border-gray-300' type="text" placeholder='E-mail' />

                <div className="flex justify-between w-full items-center mb-6">
                    <button className='w-1/2 md:w-[140px] h-[40px] bg-blue-500 text-white rounded-md'>Send OTP</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
