import React, { useReducer } from 'react'
import ReservationForm from './ReservationForm'
import { generateAvailableTimes, submitForm } from '../../utils/api'

// initial values for available times
const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...generateAvailableTimes()]

// reducer function for available times
const getTimes = (availableTimes, action) => {
    console.log(action)
    let response = generateAvailableTimes()
    return (response.length !== 0) ? response : availableTimes
}

const Reserve = () => {

    // reducer for times
    const [availableTimes, setAvailableTimes] = useReducer(getTimes, [], initializeTimes)

    return (
        <>
            <section className='bg-[#495E57] grid grid-flow-row px-10 2xl:px-64 py-16'>
                <div className="flex flex-col justify-center">
                    <h1 className='mt-[-20px] self-center text-white'>Make Your Reservation</h1>
                </div>
            </section>
            <ReservationForm
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                submitForm={submitForm}
            />
        </>
    )
}

export default Reserve