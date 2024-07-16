import React from 'react'
import { Link } from "react-router-dom"
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { VscDash } from "react-icons/vsc";
import "../Styles/footer.css"

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-header-background'>
                <div className='footer-header-text'>
                    <p>OUR BLOG</p>
                    <h4>Travel Articles</h4>
                </div>
                <div className='footer-section'>
                    <div className='footer-section-image'>
                        <Link className='footer-section-link' to="https://www.dottholidays.com/blog_view/pack-wisely-before-traveling"><img src="https://www.dottholidays.com/uploads/2811683f8b2dafac1074c4a3dc6a8754.jpg" alt="International Holiday Packages" /></Link>
                        <h4><Link className='link-text' to="https://www.dottholidays.com/blog_view/pack-wisely-before-traveling">Pack wisely before traveling</Link></h4>
                        <p>21-12-2021</p>
                    </div>
                    <div className='footer-section-image'>
                        <Link className='footer-section-link' to="https://www.dottholidays.com/blog_view/why-shouldnt-ride-elephants-in-france"><img src="https://www.dottholidays.com/uploads/d73e5d7a0fc9aa1feb45a7b9dde0aa0e.jpg" alt="International Holiday Packages" /></Link>
                        <h4><Link className='link-text' to="https://www.dottholidays.com/blog_view/why-shouldnt-ride-elephants-in-france">Why Shouldn’t Ride Elephants in France</Link></h4>
                        <p>21-12-2021</p>
                    </div>
                </div>
                <div className='footer-link'>
                    <Link className='footer-link-text' to="https://www.dottholidays.com/blog">View all Articles</Link>
                </div>
            </div>
            <div className='all-footer'>
                <div className='footer-contact'>
                    <div className='footer-image-logo'>
                        <img src="https://www.dottholidays.com/assets/images/sticky-logo.svg"
                            alt="budget friendly vacation destinations" width="120" />
                    </div>
                    <div className='footer-contact1'>
                        <h4>Head Office</h4>
                        <p>Shop No.316</p>
                        <p>Central Park Tilak Road,</p>
                        <p>Tirupathi. 517501</p>
                    </div>
                    <div className='footer-contact1'>
                        <h4>Corporate Office</h4>
                        <p>Hno.1-2-597/20/1to6/21, Flat 201, 2nd-floor,</p>
                        <p>Suryalakeview, Barafbhag colony</p>
                        <p>Lowertankbund, Domalguda, Hyderabad.</p>
                    </div>

                    <div className='footer-contact-phone'>
                        <Link className='footer-contact-phone1' to="tel:+91 9293111119"><FaPhoneAlt /> +91 9293111119</Link>
                        <Link className='footer-contact-phone1' to="mailto:contactus@dottholidays.com"><CgMail /> contactus@dottholidays.com</Link>
                    </div>
                </div>
                <div className='footer-branch1'>
                    <ul className='footer-branch1-unorderlist'>
                        <li><strong className='branch'>Our Branches : </strong></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches">Hyderabad</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches"><VscDash className='footer-branch1-link' />Vizag</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches"><VscDash className='footer-branch1-link' />Rajahmundry</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches"><VscDash className='footer-branch1-link' />Bhimavaram</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches"><VscDash className='footer-branch1-link' />Vijaywada</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches"><VscDash className='footer-branch1-link' />Nellore</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches"><VscDash className='footer-branch1-link' />Tirupathi</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches"><VscDash className='footer-branch1-link' />Chennai</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/about#branches"><VscDash className='footer-branch1-link' />Bangalore</Link></li>
                    </ul>
                </div>
                <div className='footer-branch1'>
                    <ul className='footer-branch1-unorderlist'>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/privacy_policy">Privacy Policy</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/terms_conditions"><VscDash className='footer-branch1-link' />Terms and Conditions</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/careers"><VscDash className='footer-branch1-link' />Careers</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/feedback"><VscDash className='footer-branch1-link' />Feedback</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/blog"><VscDash className='footer-branch1-link' />Blog</Link></li>
                        <li><Link className='footer-branch1-text' to="https://www.dottholidays.com/contact"><VscDash className='footer-branch1-link' />Contact Us</Link></li>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright-developed'>
                <div className='footer-copyright-container'>
                    <div className='footer-copyright'>
                        <p>Copyrights © <Link className='footer-name' to="#">Dott Holidays</Link>. All Rights Reserved.</p>
                    </div>
                    <div className='footer-copyright'>
                        <p>Designed & Developed by <Link className='footer-name' to="https://thecolourmoon.com/">Saifuddin</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
