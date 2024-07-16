import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import '../Styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='contact'>
            <Link className='phone' to="tel:+91 9293111119"><FaPhone className='icon'/>+91 9293111119</Link>
            <Link className='email' to="mailto:contactus@dottholidays.com"><BiLogoGmail className='icon'/>contactus@dottholidays.com</Link>
        </div>
        <div className='social-icon'>
            <ul className='unorder-list1'>
                <li className='link'>
                    <Link className='link-tag' to="https://www.facebook.com/DOTT-Holidays-103669474914921"><SlSocialFacebook className='tag'/></Link>
                </li>
                <li className='link'>
                    <Link className='link-tag' to="https://twitter.com/Dott_Holidays"><TiSocialTwitter className='tag'/></Link>
                </li>
                <li className='link'>
                    <Link className='link-tag' to="https://www.instagram.com/dottholidays/"><SlSocialInstagram className='tag'/></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header
