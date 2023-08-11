import React from 'react'
import {
    faStar,
    faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import customer1Image from '../../assets/Customer1.jpg';
import customer2Image from '../../assets/Customer2.jpg';
import customer3Image from '../../assets/Customer3.jpg';
import customer4Image from '../../assets/Customer4.jpg';

const testimonies = [
    {
        fullName: 'Maria Sanchez',
        image: customer1Image,
        rating: [1, 1, 1, 1, 0.5],
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Dan Watt',
        image: customer2Image,
        rating: [1, 1, 1, 1, 1],
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Tamika Jackson',
        image: customer3Image,
        rating: [1, 1, 1, 1, 0.5],
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Brandon Ming',
        image: customer4Image,
        rating: [1, 1, 1, 1],
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
];

const Testimonials = () => {
    return (
        <section className='bg-[#495E57] grid grid-flow-row px-10 2xl:px-64 py-16'>
            <div className="flex flex-col justify-center">
                <h1 className='mt-[-20px] self-center text-white'>Testimonials</h1>
            </div>
            <div className='flex sm:flex-row flex-col items-center gap-10'>
                {testimonies.map((item, index) =>
                    <TestimonialCard key={index} {...item} />
                )}
            </div>
        </section>
    )
}

const ratingLevels = { '0.5': faStarHalfStroke, '1': faStar, };

const TestimonialCard = ({ fullName, image, rating, review }) => {
    return (
        <article className='bg-[#EDEFEE] rounded-[8px] flex flex-col gap-6 p-5'>
            <div className='flex flex-col gap-3 items-center'>
                <div>
                    {rating.map((item, index) =>
                        <FontAwesomeIcon key={index} icon={ratingLevels[item]} size='xs' className='text-[#F4CE14]' />
                    )}
                </div>
                <img src={image} alt="Customer Image" className='rounded-full md:max-w-[4rem]' />
                <p className='font-bold'>{fullName}</p>
            </div>
            <p>{review}</p>
        </article>)
}

export default Testimonials