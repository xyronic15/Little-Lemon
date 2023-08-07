import React from 'react'
import pages from "../utils/paths"
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
        <footer>
            <img src="" alt='Little Lemon' />
            <nav>
                <h4>Sitemap</h4>
                <ul>
                    {pages.map((page, index) => (
                        <li key={index}>
                            <Link to={page.path}>{page.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <h4>Contact</h4>
                {contacts.map((contact, index) => (
                    <p key={index}>
                        <FontAwesomeIcon icon={contact.icon} /> {contact.text}
                    </p>
                ))}
            </div>
            <div>
                <h4>Social Media</h4>
                {socials.map((social, index) => (
                    <a key={index} href={social.link}>
                        <FontAwesomeIcon icon={social.icon} size='lg' />
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer