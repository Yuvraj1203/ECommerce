import React from 'react'

const inputData = [
    {title : "Username", label:"Login Username"}
]
const RegisterComp = () => {
  return (
    <div className='flex flex-col items-center p-3 md:p-7 rounded-xl shadow-[0_12px_34px_0_#3943571a]'>
        <p className='text-xl md:text-2xl text-[#4C5867] font-bold'>Hello there! 👋</p>
        <label htmlFor='loginUsername' className='text-sm text-[#4C5867]'>Login ID</label>
        <input type='text' id='loginUsername' placeholder={"Enter Username"} className='w-full py-2 px-3 text-sm md:text-base border-2 border-gray-300 rounded-md focus:border-[#212121] focus:outline-none' />
    </div>
  )
}

export default RegisterComp