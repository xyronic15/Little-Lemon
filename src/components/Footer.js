import React from 'react'
import { pages } from "../utils/paths"
import { Link } from 'react-router-dom'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../assets/logo-white.png"

const contacts = [
    { icon: faLocationDot, text: 'xx Road St, City, State ixixix' },
    { icon: faPhone, text: '+1 (905) 242-2946' },
    { icon: faEnvelope, text: 'admin@littlelemon.com' },
]

const socials = [
    { icon: faFacebook, link: 'https://facebook.com' },
    { icon: faTwitter, link: 'https://twitter.com' },
    { icon: faInstagram, link: 'https://instagram.com' },
    { icon: faYoutube, link: 'https://youtube.com' },
]

const Footer = () => {
    return (
        <footer className='text-white grid sm:grid-cols-4 gap-10 sm:gap-18 justify-center px-10 xl:px-64 bg-[#495E57] py-20 mx-0 w-full'>
            <img src={logo} alt='Little Lemon' className='max-h-64 max-w-40' />
            <nav>
                <Heading>Sitemap</Heading>
                <ul>
                    {pages.map((page, index) => (
                        <li key={index} className='text-[20px]'>
                            <Link to={page.path}>{page.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <Heading>Contact</Heading>
                {contacts.map((contact, index) => (
                    <>
                        <p key={index} className='text-[20px]'>
                            <FontAwesomeIcon icon={contact.icon} size='lg' /> {contact.text}
                        </p><br />
                    </>

                ))}
            </div>
            <div>
                <Heading>Social Media</Heading>
                {socials.map((social, index) => (
                    <a key={index} href={social.link} className='p-2'>
                        <FontAwesomeIcon icon={social.icon} size='xl' />
                    </a>
                ))}
            </div>
        </footer>
    )
}

const Heading = ({ children }) => {
    return (
        <h4 className='font-bold text-[26px] mb-2'>
            {children}
        </h4>)
}

export default Footer