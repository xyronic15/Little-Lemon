import React from 'react'
import { useLocation } from 'react-router-dom'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import { Link, useNavigate } from 'react-router-dom';

const ConfirmedReservation = () => {
    const loc = useLocation()

    const details = loc.state

    return (
        <section className="h-full flex flex-col place-content-center items-center px-10 xl:px-64 py-10">
            <FontAwesomeIcon icon={faCircleCheck} className="text-[#495E57]" size='6x' />
            <h2 className='text-center'>Your table has been reserved</h2>
            <h2>See you soon!</h2>
            <br />
            {Object.entries(details).map(([key, value]) =>
                <div className='grid grid-cols-2 gap-4 w-full'>
                    <div className='col-span-1 text-right'>
                        <h5 key={key} className='font-bold text-[22px] capitalize'>{key}:</h5>
                    </div>
                    <div className='col-span-1 align-middle'>
                        <p key={key} className='text-[20px]'>{value}</p>
                    </div>
                </div>
            )}
            <br />
            <br />
            <Button>
                <Link to='/Little-Lemon'>
                    Return to home
                </Link>
            </Button>
        </section>
    )
}

export default ConfirmedReservation