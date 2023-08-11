import React from 'react'
import Button from '../Button';
import { Link } from 'react-router-dom';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import greekSaladImage from '../../assets/greek salad.jpg'
import bruschettaImage from '../../assets/bruchetta.png'
import lemonDessertImage from '../../assets/lemon dessert.jpg'

const meals = [
    {
        name: 'Greek Salad',
        image: greekSaladImage,
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
        name: 'Bruschetta',
        image: bruschettaImage,
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
        name: 'Lemon Dessert',
        image: lemonDessertImage,
        price: '$5.00',
        description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
];

const SpecialsSection = () => {
    return (
        <section className='grid grid-flow-row  px-10 xl:px-64 py-16'>
            <div className='flex flex-row justify-between items-center mb-10'>
                <h1 className='mt-[-20px]'>Specials</h1>
                <Button link='/menu' text="Online Menu" />
            </div>
            <div className='grid grid-flow-col justify-between'>
                {meals.map(meal => (
                    <SpecialsItem key={meal.name} {...meal} />
                ))}
            </div>
        </section>
    )
}

const SpecialsItem = ({ name, image, price, description }) => {
    return (
        <article className='w-64 h-[439px] bg-[#EDEFEE] flex flex-col rounded-t-[16px]'>
            <img className='rounded-t-[16px] h-[186px]' src={image} alt={name} />
            <div className='flex flex-row justify-between items-center px-5 py-1'>
                <h3>{name}</h3>
                <p className='text-[#EE9972]'>{price}</p>
            </div>

            <p className='flex-1 px-5 py-1 text-[#495E57]'>{description}</p>
            <Link to='/order' className='flex flex-row items-center px-5 py-4'>
                <p className='mr-2 font-bold'>Order online</p> <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
        </article>
    )
}

export default SpecialsSection