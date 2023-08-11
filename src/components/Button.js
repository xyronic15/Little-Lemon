import React from 'react'

const Button = ({ children }) => {
    return (
        <div className='bg-[#F4CE14] w-fit h-fit font-bold py-5 px-12 rounded-[16px] text-[24px]'>
            {children}
        </div>
    )
}

export default Button