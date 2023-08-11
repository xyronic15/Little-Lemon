import React from 'react'
import MandAA from '../../assets/Mario and Adrian A.jpg'
import MandAB from '../../assets/Mario and Adrian b.jpg'

const Story = () => {
    return (
        <section className="bg-white grid md:grid-cols-2 items-center px-10 xl:px-64 py-10 gap-18">
            <div className="flex flex-col justify-center">
                <h1 className='text'>Our Story</h1>
                <h2 className='mt-[-40px]'>Chicago</h2>
                <p className='text-[20px] mb-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed ut
                    perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                </p>

            </div>
            <div className="" >
                <img className='absolute rounded-[16px] max-w-[400px] -translate-y-56 translate-x-48 hidden md:block z-10' src={MandAA} alt='Mario and Adrian' />
                <img className='absolute rounded-[16px] max-w-[400px] -translate-y-14 translate-x-10 hidden md:block z-0' src={MandAB} alt='Mario and Adrian' />
            </div>
        </section>
    )
}

export default Story