import React from 'react'

const Button = ({ children }) => {
    return (
        <div className='bg-[#F4CE14] hover:bg-[#333333] active:bg-[#495E57] hover:text-white active:text-white w-fit h-fit font-bold py-4 px-8 rounded-[16px] text-[24px]'>
            {children}
        </div>
    )
}

export default Button