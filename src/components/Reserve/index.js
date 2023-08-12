import React from 'react'
import ReservationForm from './ReservationForm'

const Reserve = () => {
    return (
        <>
            <section className='bg-[#495E57] grid grid-flow-row px-10 2xl:px-64 py-16'>
                <div className="flex flex-col justify-center">
                    <h1 className='mt-[-20px] self-center text-white'>Reserve</h1>
                </div>
            </section>
            <ReservationForm />
        </>
    )
}

export default Reserve