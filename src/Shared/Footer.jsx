import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../assets/dance-logo-dark-1.webp';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-purple-600 text-black mt-8">
            <div>
               <img src={logo} alt="" />
                <p>Dance is a wordpress theme that is truly <br /> multi-purpose with our way of taking care your needs.</p>
                <p>The barrage of shortcodes that works in <br /> the pages, makes it the better choice for your business.</p>
                <p className='mt-3'>STAY CONNECTED</p>
                <div className='flex items-center text-3xl mt-2 gap-2'>
                    <FaFacebook/> <FaTwitter/> <FaInstagram/> <FaLinkedinIn/>
                </div>
            </div>
            <div>
                <span className="footer-title">Opening Hours</span>
                <li>Hip Hop Dance : 07:00 – 21:00</li>
                <li>Ballet : 09:00 – 21:00</li>
                <li>Break Dance : 18:00 – 24:00</li>
                <li>Salsa : 18:00 – 22:00</li>
                <li>Tab Dancing : 19:00 – 23:00</li>
                <li>Cha Cha : 20:00 – 23:00</li>
            </div>
            <div>
                <span className="footer-title">Contact Us</span>
                <p>72 Pilgrim Avenue, Chevy Chase, <br /> MD 20815</p>
                <p>(088) 906-2721 <br /> (088) 925-1352</p>
                <p> info@dance.com</p>
            </div>
        </footer>
    );
};

export default Footer;