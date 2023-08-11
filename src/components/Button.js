import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({link, text}) => {
    return (
        <Link className='bg-[#F4CE14] w-fit h-fit font-bold py-5 px-12 rounded-[16px] text-[24px]' to={link}>
            {text}
        </Link>
    )
}

export default Button